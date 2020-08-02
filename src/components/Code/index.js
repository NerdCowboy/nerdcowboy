import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from 'prism-react-renderer/themes/nightOwl'

import styles from './styles.module.scss'

export const Code = ({
  codeString,
  language,
  'react-live': reactLive,
  ...props
}) => {
  if (reactLive) {
    return (
      <div className={styles.container}>
        <LiveProvider code={codeString} noInline theme={theme}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
        {...props}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
