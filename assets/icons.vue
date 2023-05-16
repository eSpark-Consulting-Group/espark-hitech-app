<template>
  <span :class="`${color} ${size}`">
    <svg
      v-if="name == 'search'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
      />
    </svg>
    <svg
      v-else-if="name == 'user'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
      />
    </svg>
    <svg
      v-else-if="name == 'heart'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
      />
    </svg>
    <svg
      v-else-if="name == 'cart'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
      />
    </svg>
    <svg
      v-else-if="name == 'shopping-bag'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
      />
    </svg>
    <svg
      v-else-if="name == 'left-arrow'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      />
    </svg>
    <svg
      v-else-if="name == 'close'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
      />
    </svg>
    <svg
      v-else-if="name == 'language'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="language"
    >
      <path
        fill="#222"
        d="M31.33 23.48a7.06 7.06 0 0 0-4.79 1.87 1.48 1.48 0 0 0-.94-.35 8.13 8.13 0 0 1-3.11-.59 12.28 12.28 0 0 0 2.48-6.3h.66a1.5 1.5 0 0 0 0-3h-4.29v-2.33a1.5 1.5 0 1 0-3 0v2.34h-4.26a1.5 1.5 0 0 0 0 3h7.84A9 9 0 0 1 20 22.67a9.32 9.32 0 0 1-1.76-2.93 1.5 1.5 0 1 0-2.82 1 12.38 12.38 0 0 0 2.11 3.63 9.28 9.28 0 0 1-3.42.6 1.5 1.5 0 1 0 0 3A11.3 11.3 0 0 0 20 26.54 10.42 10.42 0 0 0 24.71 28a7 7 0 0 0-.51 2.63v1.12H13.77a1.5 1.5 0 0 0-1.14.52 1.47 1.47 0 0 0-.34 1.21c0 .1.19 1.23.53 2.82a1 1 0 0 1-1.57 1C8.1 35 4.74 32.2 3.69 30.23a1.82 1.82 0 0 0-.15-.23 4.07 4.07 0 0 1-.74-2.35V11.52a4.13 4.13 0 0 1 4.13-4.13h25.74a4.13 4.13 0 0 1 4.13 4.13v12Zm29.87 7.13V46.7a4 4 0 0 1-.74 2.35 1.17 1.17 0 0 0-.15.27c-1 2-4.41 4.77-7.56 7.09a1 1 0 0 1-1.57-1c.34-1.6.52-2.73.53-2.83a1.49 1.49 0 0 0-1.48-1.73h-18.9a4.13 4.13 0 0 1-4.13-4.15V30.61a4.13 4.13 0 0 1 4.13-4.13h25.74a4.13 4.13 0 0 1 4.13 4.13Zm-10.42 14-1.73-4.31-3.42-8.56a1.3 1.3 0 0 0-.08-.17l-.06-.1-.09-.12-.09-.1-.1-.09-.13-.1L45 31l-.16-.09a.38.38 0 0 0-.1 0l-.16-.05H44l-.17.05a.38.38 0 0 0-.1 0l-.15.09-.11.05-.12.1-.1.09-.09.1-.1.12s0 .07-.05.1l-.09.17-3.5 8.57-1.73 4.32a1.51 1.51 0 0 0 .84 2 1.55 1.55 0 0 0 .56.11 1.51 1.51 0 0 0 1.39-1l1.34-3.35h4.84L48 45.73a1.49 1.49 0 0 0 1.39 1 1.54 1.54 0 0 0 .55-.11 1.5 1.5 0 0 0 .84-2ZM43 39.38h2.44l-1.22-3Z"
      ></path>
    </svg>
    <!-- Mobile Menu link -->
    <svg
      v-else-if="name == 'home'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
      />
    </svg>
    <svg
      v-else-if="name == 'bars'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
      />
    </svg>
    <svg
      v-else-if="name == 'heart-solid'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      />
    </svg>
    <svg
      v-else-if="name == 'user-solid'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
      />
    </svg>
    <!-- Mobile Menu link -->
    <svg
      v-else-if="name == 'info'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
      />
    </svg>
    <svg
      v-else-if="name == 'arrow-down'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
      />
    </svg>
    <svg
      v-else-if="name == 'facebook'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
      />
    </svg>
  </span>
</template>
<script>
export default {
  name: 'icons',
  props: ['name', 'color', 'size'],
}
</script>
<style lang="scss" scoped>
.light,
.white {
  fill: white;
}
.gray {
  fill: rgb(168, 168, 168);
}
.theme-color {
  fill: var(--theme-color);
}
.sm {
  svg {
    width: 1rem !important;
  }
}
</style>
