/**
 * Simple footer with year, name an copyright.
 */
export const Footer = () => {
  return <>
    <div className="text-xs text-zinc-800 font-mono">
      © {new Date().getFullYear()} dovaogedot<br />
      All Rights Reserved
    </div>
  </>
}
