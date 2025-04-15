'use client';

import { Suspense, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    OrbitControls,
    Environment,
    Cloud,
    Text,
    Float,
    Stars,
} from '@react-three/drei';
import * as THREE from 'three';
import { Building3D } from './Building3D';
import { useRouter } from 'next/navigation';

function Fireflies() {
    const count = 50;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = Math.random() * 5;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const points = state.scene.getObjectByName('fireflies') as THREE.Points;
        if (points) {
            const positions = points.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                positions[i3 + 1] = Math.sin(time + i) * 0.5 + positions[i3 + 1];
            }
            points.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points name="fireflies">
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                color="#FFD700"
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function Ground() {
    const [error, setError] = useState<string | null>(null);
    const [texture, setTexture] = useState<THREE.Texture | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTexture = async () => {
            setIsLoading(true);
            try {
                console.log('Attempting to load grass texture...');
                const textureLoader = new THREE.TextureLoader();
                const texturePath = '/texture/leafy_grass_diff_4k.jpg';
                console.log('Loading texture from:', texturePath);

                const loadedTexture = await textureLoader.loadAsync(texturePath);
                console.log('Texture loaded successfully:', loadedTexture);

                loadedTexture.wrapS = loadedTexture.wrapT = THREE.RepeatWrapping;
                loadedTexture.repeat.set(25, 25);
                loadedTexture.minFilter = THREE.LinearMipMapLinearFilter;
                loadedTexture.magFilter = THREE.LinearFilter;
                loadedTexture.anisotropy = 16;
                // Generate mipmaps for better quality
                loadedTexture.generateMipmaps = true;
                setTexture(loadedTexture);
            } catch (err) {
                console.error('Error loading grass texture:', err);
                setError('Failed to load grass texture');
                // Create a fallback texture
                console.log('Creating fallback procedural texture...');
                const canvas = document.createElement('canvas');
                canvas.width = 256;
                canvas.height = 256;
                const context = canvas.getContext('2d');

                if (!context) {
                    throw new Error('Could not get 2D context');
                }

                const gradient = context.createLinearGradient(0, 0, 256, 256);
                gradient.addColorStop(0, '#4a8505');
                gradient.addColorStop(0.5, '#3f7404');
                gradient.addColorStop(1, '#4a8505');

                context.fillStyle = gradient;
                context.fillRect(0, 0, 256, 256);

                for (let i = 0; i < 1000; i++) {
                    const x = Math.random() * 256;
                    const y = Math.random() * 256;
                    const color = Math.random() > 0.5 ? '#5c9c0a' : '#3f7404';

                    context.fillStyle = color;
                    context.fillRect(x, y, 2, 2);
                }

                const fallbackTexture = new THREE.CanvasTexture(canvas);
                fallbackTexture.wrapS = fallbackTexture.wrapT = THREE.RepeatWrapping;
                fallbackTexture.repeat.set(25, 25);
                fallbackTexture.minFilter = THREE.LinearMipMapLinearFilter;
                fallbackTexture.magFilter = THREE.LinearFilter;
                setTexture(fallbackTexture);
                console.log('Fallback texture created and set');
            } finally {
                setIsLoading(false);
            }
        };

        loadTexture();

        return () => {
            if (texture) {
                texture.dispose();
            }
        };
    }, []);

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial
                map={texture}
                color="#4a8505"
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

function FloatingSign({ text, position, onClick }: {
    text: string;
    position: [number, number, number];
    onClick: () => void;
}) {
    return (
        <Float
            speed={2}
            rotationIntensity={0.2}
            floatIntensity={0.5}
            position={position}
        >
            <Text
                fontSize={0.5}
                maxWidth={2}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign="center"
                font={undefined}
                onClick={onClick}
                onPointerOver={(e) => (e.object.scale.set(1.1, 1.1, 1.1))}
                onPointerOut={(e) => (e.object.scale.set(1, 1, 1))}
            >
                {text}
                <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.8} />
            </Text>
        </Float>
    );
}

export default function Village3D() {
    const router = useRouter();
    const [webGLError, setWebGLError] = useState(false);

    useEffect(() => {
        // Check for WebGL support
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) {
                setWebGLError(true);
            }
        } catch (e) {
            setWebGLError(true);
        }
    }, []);

    const handleBuildingClick = (route: string) => {
        router.push(route);
    };

    if (webGLError) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
                <div className="text-center p-8 max-w-2xl">
                    <h2 className="text-3xl font-bold text-white mb-4">WebGL Not Supported</h2>
                    <p className="text-white text-lg mb-4">
                        Your browser or device doesn't support WebGL, which is needed to display the 3D village.
                    </p>
                    <div className="text-white text-left space-y-2">
                        <p className="font-semibold">Try these solutions:</p>
                        <ul className="list-disc list-inside">
                            <li>Update your browser to the latest version</li>
                            <li>Enable hardware acceleration in your browser settings</li>
                            <li>Try a different browser (Chrome or Firefox recommended)</li>
                            <li>Update your graphics drivers</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-screen">
            <Canvas
                shadows
                camera={{ position: [10, 10, 10], fov: 45 }}
                className="bg-gradient-to-b from-blue-300 to-blue-500"
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                }}
            >
                <Suspense fallback={null}>
                    {/* Lighting */}
                    <ambientLight intensity={0.5} />
                    <directionalLight
                        position={[5, 5, 5]}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                    />
                    <pointLight position={[-3, 0, -4]} intensity={2} color="#FFA500" />

                    {/* Environment */}
                    <Environment preset="sunset" />
                    <Stars radius={50} depth={50} count={1000} factor={4} />
                    <Cloud position={[-4, 15, -5]} speed={0.2} opacity={0.5} />
                    <Cloud position={[4, 12, -10]} speed={0.2} opacity={0.5} />
                    <Fireflies />
                    <Ground />

                    {/* Buildings */}
                    <Building3D
                        type="townhall"
                        position={[0, 0, 0]}
                        scale={1.5}
                        onClick={() => handleBuildingClick('/about')}
                    />
                    <Building3D
                        type="laboratory"
                        position={[5, 0, -3]}
                        onClick={() => handleBuildingClick('/skills')}
                    />
                    <Building3D
                        type="barracks"
                        position={[-5, 0, 3]}
                        onClick={() => handleBuildingClick('/experience')}
                    />
                    <Building3D
                        type="castle"
                        position={[4, 0, 4]}
                        onClick={() => handleBuildingClick('/projects')}
                    />
                    <Building3D
                        type="campfire"
                        position={[-3, 0, -4]}
                        onClick={() => handleBuildingClick('/contact')}
                    />

                    {/* Navigation Signs */}
                    <FloatingSign
                        text="ABOUT"
                        position={[0, 2, -2]}
                        onClick={() => handleBuildingClick('/about')}
                    />
                    <FloatingSign
                        text="SKILLS"
                        position={[5, 2, -4]}
                        onClick={() => handleBuildingClick('/skills')}
                    />
                    <FloatingSign
                        text="PROJECTS"
                        position={[4, 2, 5]}
                        onClick={() => handleBuildingClick('/projects')}
                    />
                    <FloatingSign
                        text="CONTACT"
                        position={[-3, 2, -5]}
                        onClick={() => handleBuildingClick('/contact')}
                    />
                    <FloatingSign
                        text="EXPERIENCE"
                        position={[-5, 2, 4]}
                        onClick={() => handleBuildingClick('/experience')}
                    />

                    {/* Camera Controls */}
                    <OrbitControls
                        enablePan={false}
                        maxPolarAngle={Math.PI / 2 - 0.1}
                        minDistance={5}
                        maxDistance={20}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
} 