import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-line overflow-hidden bg-ink my-2">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          {title && <span className="text-[11px] font-mono text-[#9ca3af] tracking-wide">{title}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="text-[#9ca3af] hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-neutral-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
