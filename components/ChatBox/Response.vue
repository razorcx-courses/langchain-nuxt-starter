<template>
  <div id="response" class="bg-black text-sm p-3 flex flex-col rounded-b-sm">
    <div
      class="text-xs text-gray-800 flex justify-left items-center rounded-t-sm overflow-hidden"
    >
      <p class="py-2 px-3 rounded-t-sm bg-gray-300">AI Response</p>
    </div>
    <div
      class="h-48 md:min-h-52 p-3 bg-gray-300 rounded-b-sm text-sm overflow-x-auto overflow-y-auto text-gray-800"
    >
      <slot></slot>
    </div>
  </div>
</template>
