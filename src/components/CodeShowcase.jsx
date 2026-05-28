import React from 'react';

export default function CodeShowcase() {
  // Exemplo de código robusto para demonstrar maturidade técnica
  const codeString = `// Backend Service - LGPD Compliance Verification
import { SecurityContext, Log } from "@core/security";
import { UserData, ValidationResult } from "@/types";

class ComplianceOrchestrator {
  private async validateDataPrivacy(user: UserData): Promise<ValidationResult> {
    const consent = await SecurityContext.getConsentStatus(user.id);
    
    if (!consent.active) {
      Log.warn(\`Data processing restricted for user: \${user.id}\`);
      throw new Error("Missing LGPD Explicit Consent Token.");
    }

    return {
      status: "COMPLIANT",
      timestamp: new Date().toISOString(),
      encryption: "AES-256-GCM"
    };
  }
}`;

  return (
    <div className="bg-[#0b0f19] text-gray-100 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Por dentro do meu código</h2>
          <p className="text-gray-400 text-sm mt-1">Uma amostra da minha abordagem para escrever código limpo, tipado e focado em segurança.</p>
        </div>
        
        {/* Janela do Editor */}
        <div className="w-full bg-[#0d1324] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
          {/* Barra superior do editor */}
          <div className="bg-[#11192e] px-4 py-3 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs font-mono text-gray-500 ml-4">ComplianceOrchestrator.ts</span>
            </div>
            <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">TypeScript</span>
          </div>
          
          {/* Corpo do código */}
          <div className="p-6 font-mono text-xs md:text-sm overflow-x-auto leading-relaxed text-gray-300">
            <pre><code>{codeString}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}