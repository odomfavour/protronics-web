import { Metadata } from 'next';
import StoryPage from './Story';

export const metadata: Metadata = {
	title: 'Our Story - Protronics Inc.',
	description: 'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
};

export default function page() {
	return <StoryPage />;
}
