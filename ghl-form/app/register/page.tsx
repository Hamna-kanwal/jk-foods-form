'use client';

import React, { useEffect } from 'react';

export default function TradeRegistrationPage() {
  useEffect(() => {
    // GoHighLevel form embed script ko dynamically load karne ke liye
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup jab component unmount ho
      document.body.removeChild(script);
    };    
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Trade Registration Form</h1>
        
        {/* GHL Form Iframe */}
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/gyeCjtub39RpXrT95luu"
          style={{ width: '100%', height: '732px', border: 'none', borderRadius: '8px' }}
          id="inline-gyeCjtub39RpXrT95luu"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="jk form"
          data-height="732"
          data-layout-iframe-id="inline-gyeCjtub39RpXrT95luu"
          data-form-id="gyeCjtub39RpXrT95luu"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="jk form"
        />
      </div>
    </main>
  );
}