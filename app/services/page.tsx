import { Metadata } from 'next';
import ServicesPage from './Services';

export const metadata: Metadata = {
	title: 'Services - Protronics Inc.',
	description: 'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
};
export default function page() {
	return <ServicesPage />;
}
