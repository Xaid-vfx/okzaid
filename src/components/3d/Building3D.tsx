'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BuildingProps {
    position: [number, number, number];
    rotation?: [number, number, number];
    scale?: number;
    type: 'townhall' | 'laboratory' | 'barracks' | 'castle' | 'campfire';
    onClick?: () => void;
}

const buildingColors = {
    townhall: '#8B4513',
    laboratory: '#4B0082',
    barracks: '#8B0000',
    castle: '#4A4A4A',
    campfire: '#FFA500'
};

export function Building3D({ position, rotation = [0, 0, 0], scale = 1, type, onClick }: BuildingProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    // Hover animation
    useFrame((state) => {
        if (!meshRef.current) return;

        if (hovered) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
        } else {
            meshRef.current.position.y = position[1];
        }
    });

    const renderBuilding = () => {
        switch (type) {
            case 'townhall':
                return (
                    <group>
                        <mesh castShadow receiveShadow>
                            <boxGeometry args={[2, 2, 2]} />
                            <meshStandardMaterial color={buildingColors[type]} />
                        </mesh>
                        <mesh position={[0, 1.5, 0]} castShadow>
                            <coneGeometry args={[1.5, 1.5, 4]} />
                            <meshStandardMaterial color={buildingColors[type]} />
                        </mesh>
                    </group>
                );
            case 'laboratory':
                return (
                    <group>
                        <mesh castShadow receiveShadow>
                            <cylinderGeometry args={[1, 1, 2, 8]} />
                            <meshStandardMaterial color={buildingColors[type]} />
                        </mesh>
                        <mesh position={[0, 1.5, 0]} castShadow>
                            <sphereGeometry args={[0.8, 16, 16]} />
                            <meshStandardMaterial color={buildingColors[type]} metalness={0.5} />
                        </mesh>
                    </group>
                );
            case 'barracks':
                return (
                    <group>
                        <mesh castShadow receiveShadow>
                            <boxGeometry args={[2, 1.5, 2]} />
                            <meshStandardMaterial color={buildingColors[type]} />
                        </mesh>
                        <mesh position={[0, 1, 0]} castShadow>
                            <boxGeometry args={[1.5, 0.5, 1.5]} />
                            <meshStandardMaterial color={buildingColors[type]} />
                        </mesh>
                    </group>
                );
            case 'castle':
                return (
                    <group>
                        <mesh castShadow receiveShadow>
                            <cylinderGeometry args={[1.2, 1.5, 2, 8]} />
                            <meshStandardMaterial color={buildingColors[type]} />
                        </mesh>
                        {[0, 1, 2, 3].map((i) => (
                            <mesh
                                key={i}
                                position={[
                                    Math.cos(i * Math.PI / 2) * 0.8,
                                    1.5,
                                    Math.sin(i * Math.PI / 2) * 0.8
                                ]}
                                castShadow
                            >
                                <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
                                <meshStandardMaterial color={buildingColors[type]} />
                            </mesh>
                        ))}
                    </group>
                );
            case 'campfire':
                return (
                    <group>
                        <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
                            <cylinderGeometry args={[0.8, 1, 0.2, 16]} />
                            <meshStandardMaterial color="#4A4A4A" />
                        </mesh>
                        <mesh position={[0, 0.3, 0]} castShadow>
                            <coneGeometry args={[0.5, 1, 8]} />
                            <meshStandardMaterial color={buildingColors[type]} emissive={buildingColors[type]} emissiveIntensity={0.5} />
                        </mesh>
                    </group>
                );
        }
    };

    return (
        <group
            ref={meshRef}
            position={position}
            rotation={rotation}
            scale={[scale, scale, scale]}
            onClick={onClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {renderBuilding()}
        </group>
    );
} 