/**
 * Very simple code highlighting.
 */
export const Code = ({ children }: { children: string }) => {
  const stripMargin = (text: string) =>
    text.trim()
      // remove everything up to margin marker ('|') on each line
      .replace(/^.*?\|/gm, '')

  return <>
    <code>
      {stripMargin(children)
        .split('\n')
        .map(row => {
          // comment
          if (row.startsWith('#'))
            return <span className="text-zinc-600">{row}</span>

          // command
          if (row.startsWith('$')) {
            const parts = row.split(' ')

            // remove prompt
            parts.shift()

            return <>
              <span className="text-yellow-300">{`$ `}</span>
              <span className="text-zinc-300">{`${parts.shift()} `}</span>
              <span className="text-zinc-400">{parts.join(' ')}</span>
            </>
          }

          // fallback
          return row
        })
        .reduce((acc, x) => <>{acc}<br></br>{x}</>)}
    </code>
  </>
}
