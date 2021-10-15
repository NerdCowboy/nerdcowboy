import React, { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from 'prism-react-renderer/themes/nightOwl'

import * as styles from  './styles.module.scss'

export const Code = ({
  codeString,
  language,
  'react-live': reactLive,
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = (str) => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  const copyButton = (string) => {
    copyToClipboard(string)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 3000)
  }

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
          <pre data-language={language} className={className} style={style}>
            <code>
              <button
                type="button"
                onClick={() => copyButton(codeString)}
                className={styles.copyButton}
              >
                {!isCopied ? 'Copy' : 'Copied'}
              </button>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  )
}
