import { Metadata } from 'next';
import PCBAssembly from './PCBAssembly';

export const metadata: Metadata = {
	title: 'PCB Assembly - Protronics Inc.',
	description: 'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
};
export default function page() {
	return <PCBAssembly />;
}
