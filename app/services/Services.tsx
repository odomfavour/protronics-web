'use client';
import PcbAssemblyTab from '@/components/services/PcbAssemblyTab';
import PcbTab from '@/components/services/PcbTab';
import { useState } from 'react';

const ServicesPage = () => {
  const tabs = [
    { id: 1, label: 'PCB Design' },
    { id: 2, label: 'PCB Assembly' },
    { id: 3, label: 'PCB Testing' },
    { id: 4, label: 'IC Packaging' },
  ];
  const [activeTab, setActiveTab] = useState('PCB Design');
  return (
    <section className="pt-[120px] lg:pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="text-center">
            <p className="text-[56px] font-bold text-[#000000]">Testing</p>
            <p className="text-2xl font-normal">
              Discover our expertise in PCB Design.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap gap-6 my-5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-2 px-5 border rounded-[10px] font-semibold ${
                    activeTab == tab.label
                      ? 'bg-[#1671D9] border-[#1671D9] text-white'
                      : 'border-proDark'
                  }`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {activeTab === 'PCB Design' && <PcbTab />}
            {activeTab === 'PCB Assembly' && <PcbAssemblyTab />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
