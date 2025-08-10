import { useLayoutEffect, useRef, useState } from 'react';

const ExpandableText = ({ text, preview = 50 }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [h, setH] = useState(0);

  // 初次與每次展開時更新實際高度
  useLayoutEffect(() => {
    if (contentRef.current) setH(contentRef.current.scrollHeight);
  }, [text, open]);

  return (
    <p className="mt-4 text-slate-700 leading-loose">
      {!open && <span>{text.slice(0, preview)}... </span>}

      <span
        id="exp"
        className="inline-block overflow-hidden align-baseline transition-[height] duration-300 ease-in-out"
        style={{ height: open ? h : 0 }}
        aria-hidden={!open}
      >
        <span ref={contentRef} className="block">{text}</span>
      </span>

      <button
        type="button"
        className="ml-2 bg-transparent border-0 capitalize cursor-pointer text-blue-500 font-semibold hover:underline focus:underline"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls="exp"
      >
        {open ? 'Show Less' : 'Read More'}
      </button>
    </p>
  );
}

export default ExpandableText