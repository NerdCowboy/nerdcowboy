/* eslint-disable jsx-a11y/accessible-emoji */
import React, { cloneElement } from 'react'
import { useTooltip, TooltipPopup } from '@reach/tooltip'
import Portal from '@reach/portal'
import '@reach/tooltip/styles.css'
import * as styles from  './styles.module.scss'

// const name = 'Triangle'

// function Example() {
//   return (
//     <div>
//       <ExampleTriangle label="Notifications">
//         <button style={{ fontSize: 25 }}>
//           <span aria-hidden>🔔</span>
//         </button>
//       </ExampleTriangle>
//       <ExampleTriangle label="Settings">
//         <button style={{ fontSize: 25 }}>
//           <span aria-hidden>⚙️</span>
//         </button>
//       </ExampleTriangle>

//       <div style={{ float: 'right' }}>
//         <ExampleTriangle label="Notifications" aria-label="3 Notifications">
//           <button style={{ fontSize: 25 }}>
//             <span>🔔</span>
//             <span>3</span>
//           </button>
//         </ExampleTriangle>
//       </div>
//       <div style={{ marginTop: 600 }}>Hi</div>
//     </div>
//   )
// }

// Example.story = { name }
// export const Comp = Example
// export default { title: 'Tooltip' }

// Center the tooltip, but collisions will win
const centered = (triggerRect, tooltipRect) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2
  const left = triggerCenter - tooltipRect.width / 2
  const maxLeft = document.documentElement.clientWidth - tooltipRect.width
  return {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.bottom + 8 + window.scrollY,
  }
}

export default function Tooltip({ children, ...rest }) {
  // get the props from useTooltip
  const [trigger, tooltip] = useTooltip()

  // destructure off what we need to position the triangle
  const { isVisible, triggerRect } = tooltip

  return (
    <>
      {cloneElement(children, trigger)}

      {isVisible && (
        // the Triangle, we position it relative to the trigger, not the popup
        // so that collisions don't have a triangle pointing off to nowhere
        <Portal>
          <div
            style={{
              left:
                triggerRect && triggerRect.left - 10 + triggerRect.width / 2,
              top: triggerRect && triggerRect.bottom + window.scrollY,
            }}
            className={styles.container}
          />
        </Portal>
      )}
      <TooltipPopup
        {...tooltip}
        {...rest}
        className={styles.tooltip}
        position={centered}
      />
    </>
  )
}
