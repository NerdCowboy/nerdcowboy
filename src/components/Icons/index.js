import React from 'react'
import cx from 'classnames'

import * as styles from './styles.module.scss'

export const Icon = (props) =>
  React.cloneElement(props.children, {
    className: cx(styles.icon, props.className),
  })

export const IconGithub = ({ className }) => (
  <Icon className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28.99">
      <title>Github</title>
      <g fill="currentColor">
        <path d="M15 0a14.85 14.85 0 0 0-4.74 29c.75.14 1-.32 1-.71v-2.77c-4.17.9-5.05-1.75-5.05-1.75a3.94 3.94 0 0 0-1.67-2.17c-1.36-.92.1-.9.1-.9a3.15 3.15 0 0 1 2.3 1.53 3.21 3.21 0 0 0 4.37 1.24 3.15 3.15 0 0 1 1-2c-3.33-.38-6.83-1.65-6.83-7.35A5.72 5.72 0 0 1 7 10.1a5.3 5.3 0 0 1 .15-3.93s1.26-.4 4.13 1.52a14.36 14.36 0 0 1 7.51 0c2.86-1.92 4.12-1.52 4.12-1.52A5.29 5.29 0 0 1 23 10.1a5.72 5.72 0 0 1 1.54 4c0 5.71-3.51 7-6.85 7.33a3.53 3.53 0 0 1 1 2.75v4.08s.27.86 1 .71A14.85 14.85 0 0 0 15 0z" />
      </g>
    </svg>
  </Icon>
)
export const IconCowbell = ({ className }) => (
  <Icon className={className}>
    <svg viewBox="0 0 33 42" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs />
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Layout"
          transform="translate(-47.000000, -15.000000)"
          fill="currentColor"
        >
          <g id="Header" transform="translate(28.000000, 15.000000)">
            <path
              d="M29.2848703,7.60030335 L29.3882142,1.21660674 L33.313371,0.640257695 L43.5704304,3.5677425 L43.4650971,10.1005124 C43.4650971,10.1005124 46.4263651,11.7898237 46.8218928,12.7835272 C47.2173899,13.7792149 49.029908,22.8854078 49.3936367,25.8587339 C49.7573349,28.8319583 51.5678687,38.0298338 51.5678687,38.0298338 L37.1866168,41.7026344 L19.4784347,34.2677927 C19.4784347,34.2677927 23.2108137,14.9599978 23.4095952,14.0854004 C23.8170182,12.2927554 24.0853095,10.4364617 24.5086676,9.84225434 C24.9300058,9.24799614 26.4901218,8.37156706 27.5236121,8.11519145 C28.5590867,7.8608001 29.2844582,7.60045599 29.2844582,7.60045599 L29.2848703,7.60030335 Z M32.9576709,4.05271418 L32.6993059,4.05470352 L32.6993059,7.83480639 L38.9517366,9.48835018 L39.3114612,5.62277182 L32.9576709,4.05271418 Z"
              id="Fill-1-Copy-4"
            />
          </g>
        </g>
      </g>
    </svg>
  </Icon>
)

export const IconX = ({ className }) => (
  <Icon className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24.01">
      <title>X</title>
      <g fill="currentColor">
        <path d="M30 2.84a12.46 12.46 0 0 1-3.53 1 6.1 6.1 0 0 0 2.7-3.4 12.44 12.44 0 0 1-3.91 1.47A6.19 6.19 0 0 0 20.77 0a6.11 6.11 0 0 0-6.15 6.06 6 6 0 0 0 .16 1.38A17.57 17.57 0 0 1 2.09 1.11a6 6 0 0 0-.83 3A6 6 0 0 0 4 9.2a6.21 6.21 0 0 1-2.8-.76v.08a6.09 6.09 0 0 0 4.94 5.94 6.25 6.25 0 0 1-2.78.1 6.15 6.15 0 0 0 5.75 4.21 12.47 12.47 0 0 1-7.64 2.59A12.74 12.74 0 0 1 0 21.28 17.62 17.62 0 0 0 9.43 24 17.25 17.25 0 0 0 26.95 6.76v-.78A12.39 12.39 0 0 0 30 2.84z" />
      </g>
    </svg>
  </Icon>
)

export const IconLinkedIn = ({ className }) => (
  <Icon className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <title>LinkedIn</title>
      <g fill="currentColor">
        <path d="M25 0H5a5.05 5.05 0 0 0-5 5v20a5.05 5.05 0 0 0 5 5h20a5.05 5.05 0 0 0 5-5V5a5.05 5.05 0 0 0-5-5zM11.25 24.38H7.5V11.25h3.75zm-1.88-15a1.88 1.88 0 1 1 1.88-1.88 1.88 1.88 0 0 1-1.87 1.88zm15 15h-3.74v-7.5a1.87 1.87 0 1 0-3.75 0v7.5h-3.75V11.25h3.75v2.33c.77-1.06 2-2.33 3.28-2.33a4.47 4.47 0 0 1 4.22 4.69z" />
      </g>
    </svg>
  </Icon>
)

export const IconCircleRightArrow = ({ className }) => (
  <Icon className={className}>
    <svg viewBox="0 0 31 30" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor" fillRule="evenodd">
        <path d="M15.724 29.76C7.56 29.76.917 23.115.917 14.951.917 6.787 7.561.145 15.724.145c8.165 0 14.807 6.644 14.807 14.807 0 8.164-6.642 14.807-14.807 14.807zm0-28.454C8.201 1.306 2.08 7.427 2.08 14.95c0 7.525 6.121 13.646 13.644 13.646s13.644-6.12 13.644-13.644c0-7.525-6.12-13.646-13.644-13.646z" />
        <path d="M20.773 16.112H7.677a1.163 1.163 0 010-2.326h12.915l-2.881-2.488a1.162 1.162 0 111.52-1.76l5.3 4.58a1.165 1.165 0 01.014 1.747l-3.427 3.056a.742.742 0 01-.053.044l-1.808 1.431a1.16 1.16 0 01-1.634-.19 1.163 1.163 0 01.19-1.635l1.783-1.41 1.177-1.049z" />
      </g>
    </svg>
  </Icon>
)

export const IconGun = ({ className }) => (
  <svg
    className={className}
    width="51"
    height="25"
    viewBox="0 0 51 25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        x1="39.462%"
        y1="129.365%"
        x2="68.8%"
        y2="-38.996%"
        id="a"
      >
        <stop stopColor="#3B2B1E" offset="0%" />
        <stop stopColor="#BE8455" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M434.042 1768.435l.315.813 18.239-8.428-.366-.791-18.188 8.406zm1.665 3.512l.293.861 12.769-5.891-.382-.829-12.68 5.859zm-12.341 4.604l.314.68a3.443 3.443 0 004.57 1.68l4.93-2.278-.424-.917-3.028 1.4c-.863.398-1.777.258-2.042-.313-.264-.572.221-1.359 1.084-1.758l3.028-1.4-1.031-2.232-3.028 1.399c-.864.4-1.687.457-1.837.128-.153-.328.425-.918 1.289-1.317l3.028-1.4-.242-.521-4.93 2.278a3.445 3.445 0 00-1.681 4.57v.001zm7.837 3.95l-1.74 1.117c.936 1.383 2.421.72 2.48 1.795.048.853-2.843 1.77-4.455-.519l-.833.545c-.948.625 1.86 3.235 4.047 2.224 2.753-1.243 2.888-2.998 2.342-4.18-.414-.893-.876-1.589-1.841-.983zm2.294-1.577a1.04 1.04 0 00-.318.741c-.007.345.292.851.376 1.056.956 2.068.834 4-2.296 5.445l-.527.244c-2.05.947-3.85-.077-4.913-1.204a1.027 1.027 0 00-1.077-.136 1.01 1.01 0 00-.51.53c-.546 1.135-.166 3.09 3.055 7.358 1.664 2.206-1.138 3.322-1.138 3.322l-7.408 3.424s-2.512 1.378-2.63-1.58c-.062-1.51-.67-7.62-.838-9.555-.688-7.918 5.466-10.347 5.466-10.347l.797-.345-.53-1.143c-3.329 1.544-5.302-1.457-4.66-2.135.81-.851 1.568.968 3.51.072a3.633 3.633 0 001.562-1.349c.131-.212.238-.436.317-.67a.985.985 0 01.545-.671l24.783-11.452-.25-.543c-.17-.37.018-.745.427-.836l2.606-.586a.98.98 0 01.88.27l.792-.367a.984.984 0 011.307.48l1.555 3.365a.987.987 0 01-.48 1.306l-4.59 2.123c.09.084.164.185.219.304l.697 1.508a.984.984 0 01-.478 1.307l-14.039 6.487c.762 1.65-.312 2.315-2.212 3.578z"
      transform="rotate(25 4213.3 -26.24)"
      fill="url(#a)"
      fillRule="evenodd"
    />
  </svg>
)
export const IconBullet = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="6"
    viewBox="0 0 20 6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#A17049" fillRule="evenodd">
      <path d="M11.567 4.982a.832.832 0 00.595.258l1.774-.006a.714.714 0 00.094.006.35.35 0 00.065-.007l2.654-.009c.605 0 1.195-.246 1.663-.696.431-.414.688-.942.689-1.413 0-.453-.253-.978-.678-1.403-.465-.465-1.045-.721-1.632-.721h-2.76V.99h-1.867c-.22 0-.632.094-.894.727-.344.831-.347 2.622.297 3.265zM16.79 1.84c.488 0 .857.297 1.033.474.295.295.43.623.43.803 0 .237-.169.551-.428.802-.179.17-.556.46-1.075.459l-2.7.008h-.013c-.095-.083-.287-.515-.287-1.27 0-.773.202-1.209.294-1.277l2.746.001zm-4.614 0h.915c-.254.728-.254 1.822-.001 2.55l-.913.003c-.002-.002-.006-.004-.01-.009-.208-.208-.358-1.024-.248-1.807.07-.507.212-.7.257-.737zM3.05 1.812l6.746.027a.42.42 0 00.423-.423.428.428 0 00-.126-.301.428.428 0 00-.302-.127L3.046.961a.42.42 0 00-.424.424.43.43 0 00.428.427zM8.514 3.116a.422.422 0 00-.424-.424H1.37a.423.423 0 100 .848h6.72c.234 0 .424-.19.424-.424zM10.096 4.518a.422.422 0 00-.3-.125H3.078a.423.423 0 100 .848h6.719a.423.423 0 00.3-.723z" />
    </g>
  </svg>
)
