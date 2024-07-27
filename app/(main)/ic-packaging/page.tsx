import { Metadata } from 'next';
import ICPackaging from './ICPackaging';

export const metadata: Metadata = {
	title: 'IC Packaging - Protronics-inc',
	description: 'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
};

export default function page() {
	return <ICPackaging />;
}
