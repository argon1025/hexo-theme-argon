hexo.extend.helper.register(
  "feed",
  (title, subtitle, categoryName, iconName, createdAt, tags, postPath, customThumbnailPath) => {
    // load config
    const config = hexo.theme.config;
    // random thumbNail
    const randomThumbnailData = config.post.thumbnail.sort(() => Math.random() - 0.5)[0];
    // if customThumbnailPath exist
    const thumbnailPath = customThumbnailPath || randomThumbnailData.path;
    // category icon load
    const iconConfigData = config.post.categoryIcon[iconName] || config.post.categoryIcon.default;
    const iconData = hexo.extend.helper.store.simpleIcons(iconConfigData.iconName, "w-full", "h-full");
    // create Tag List
    const tagInfo = tags.map((tag) => `<span> #${tag} </span>`);
    return `
    <a href="${postPath}">
        <div class="flex w-full justify-center">
            <div class="flex relative flex-col w-full max-w-5xl justify-center space-y-4">
                <div class="z-0 rounded-3xl overflow-hidden h-56 w-full hover:drop-shadow-xl transition duration-300 ease-in-out">
                    <img src=${thumbnailPath} alt="Thumbnail" class="w-full h-full object-cover" loading="lazy"></img>
                </div>
                <div class="text-sm space-y-4">
                    <div class="flex flex-row items-center text-gray-500 space-x-2">
                        <div class="flex flex-row bg-gray-100 rounded-md justify-center items-center py-2 px-3 space-x-1">
                            <div class="w-3 h-3 fill-gray-400">${iconData.svg}</div>
                                <span class="text-gray-400 text-sm">${categoryName}</span>
                        </div>
                            <!-- Space -->
                            <div class="flex grow"></div>
                            <!-- Space End -->
                            <span>${createdAt}</span>
                    </div>
                     <div class="space-y-1">
                        <h2 class="text-xl md:text-3xl font-semibold">${title}</h2>
                        <h3 class="text-gray-500">${subtitle}</h3>
                    </div>
                    <div class="text=sm text-gray-300">${tagInfo}</div>
                </div>
            </div>
        </div>
    </a>
    `;
  }
);

hexo.extend.helper.register(
  "mainFeed",
  (title, subtitle, categoryName, iconName, createdAt, tags, postPath, customThumbnailPath) => {
    // load config
    const config = hexo.theme.config;
    // random thumbNail
    const randomThumbnailData = config.post.thumbnail.sort(() => Math.random() - 0.5)[0];
    // if customThumbnailPath exist
    const thumbnailPath = customThumbnailPath || randomThumbnailData.path;
    // category icon load
    const iconConfigData = config.post.categoryIcon[iconName] || config.post.categoryIcon.default;
    const iconData = hexo.extend.helper.store.simpleIcons(iconConfigData.iconName, "w-full", "h-full");
    // create Tag List
    const tagInfo = tags.map((tag) => `<span> #${tag} </span>`);
    return `
    <div class="flex w-full justify-center">
        <div class="flex relative flex-col w-full max-w-5xl justify-center">
            <a href="${postPath}" class="space-y-4">
                <div class="z-0 rounded-3xl overflow-hidden h-96 w-full hover:drop-shadow-xl transition duration-300 ease-in-out">
                    <img src=${thumbnailPath} alt="Thumbnail" class="w-full h-full object-cover" loading="lazy"></img>
                </div>
                <div class="text-sm space-y-4">
                    <div class="flex flex-row items-center text-gray-500 space-x-2">
                        <div class="flex flex-row bg-gray-100 rounded-md justify-center items-center py-2 px-3 space-x-1">
                            <div class="w-3 h-3 fill-gray-400">${iconData.svg}</div>
                                <span class="text-gray-400 text-sm">${categoryName}</span>
                        </div>
                            <!-- Space -->
                            <div class="flex grow"></div>
                            <!-- Space End -->
                            <span>${createdAt}</span>
                    </div>
                     <div class="space-y-1">
                        <h2 class="text-xl md:text-3xl font-semibold">${title}</h2>
                        <h3 class="text-gray-500">${subtitle}</h3>
                    </div>
                    <div class="text=sm text-gray-300">${tagInfo}</div>
                </div>
            </a>
        </div>
    </div>
    `;
  }
);

hexo.extend.helper.register("nextButtonFeed", (nextPageUrl) => {
  return `
    <a href="${nextPageUrl}">
    <div class="flex flex-col w-full h-full justify-center items-center bg-gray-200 rounded-3xl space-y-4 text-gray-400 hover:text-white hover:bg-sky-400 transition duration-300 ease-in-out p-5">
        <div class="h-20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </div>
        <div>
            <span class="text-base">Next</span>
        </div>
    </div>
    </a>
    `;
});
