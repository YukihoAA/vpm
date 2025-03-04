import { baseLayerLuminance, StandardLuminance } from "https://unpkg.com/@fluentui/web-components";

const LISTING_URL = "https://yukihoaa.github.io/vpm/index.json";

const PACKAGES = {
  "pm.booth.kirutoshop": {
    name: "pm.booth.kirutoshop",
    displayName: "EditorOnly Toggle",
    description: "Toggle EditorOnly and Active Status on Hierarchy",
    listUrl: "https://yukihoaa.github.io/vpm/index.json",
    author: {
      name: "KirutoLab",
      url: "https://booth.pm/ko/items/5748769",
    },
    dependencies: {},
    keywords: ["Editor", "Hierarchy"],
    license: "MIT",
    licensesUrl: "https://github.com/YukihoAA/EditorOnly_Toggle/raw/master/LICENSE",
  },
  "jp.lilxyzw.liltoon": {
    name: "jp.lilxyzw.liltoon",
    displayName: "lilToon",
    description: "Feature-rich toon shader.",
    listUrl: "https://lilxyzw.github.io/vpm-repos/vpm.json",
    author: {
      name: "lilxyzw",
      url: "https://github.com/lilxyzw/lilToon",
    },
    dependencies: {},
    keywords: ["Toon", "Shader", "Material"],
    license: "MIT",
    licensesUrl: "https://github.com/lilxyzw/lilToon/raw/master/LICENSE",
  },
  "jp.lilxyzw.avatar-utils": {
    name: "jp.lilxyzw.avatar-utils",
    displayName: "lilAvatarUtils",
    description: "Utilities for avatar modification.",
    listUrl: "https://lilxyzw.github.io/vpm-repos/vpm.json",
    author: {
      name: "lilxyzw",
      url: "https://github.com/lilxyzw/lilAvatarUtils",
    },
    dependencies: {},
    keywords: [],
    license: "MIT",
    licensesUrl: "https://github.com/lilxyzw/lilAvatarUtils/raw/master/LICENSE",
  },
  "nadena.dev.modular-avatar": {
    name: "nadena.dev.modular-avatar",
    displayName: "Modular Avatar",
    description: "A suite of tools for assembling your avatar out of reusable components",
    listUrl: "https://vpm.nadena.dev/vpm.json",
    author: {
      name: "bd_",
      url: "https://github.com/bdunderscore/modular-avatar",
    },
    dependencies: {
      "com.vrchat.avatars": ">=3.7.4",
      "nadena.dev.ndmf": ">=1.7.0-alpha.0 <2.0.0-a",
    },
    keywords: [],
    license: "MIT",
    licensesUrl: "https://raw.githubusercontent.com/bdunderscore/modular-avatar/main/COPYING.md",
  },
  "nadena.dev.ndmf": {
    name: "nadena.dev.ndmf",
    displayName: "Non-Destructive Modular Framework",
    description: "A framework for building non-destructive plugins for VRChat Avatar 3.0",
    listUrl: "https://vpm.nadena.dev/vpm.json",
    author: {
      name: "bd_",
      url: "https://github.com/bdunderscore/ndmf",
    },
    dependencies: {},
    keywords: [],
    license: "MIT",
    licensesUrl: "https://raw.githubusercontent.com/bdunderscore/ndmf/main/COPYING.md",
  },
  "com.poiyomi.toon": {
    name: "com.poiyomi.toon",
    displayName: "Poiyomi Toon Shader",
    description: "Feature-rich shaders for Unity and VRChat.",
    listUrl: "https://poiyomi.github.io/vpm/index.json",
    author: {
      name: "Poiyomi",
      url: "https://github.com/poiyomi/PoiyomiToonShader",
    },
    dependencies: {},
    keywords: [],
    license: "MIT",
    licensesUrl: "https://raw.githubusercontent.com/poiyomi/PoiyomiToonShader/master/LICENSE",
  },
  "jp.whiteflare.avatartools": {
    name: "jp.whiteflare.avatartools",
    displayName: "Flare's Avatar Tools",
    description: "Flare's Avatar Tools",
    listUrl: "https://whiteflare.github.io/vpm-repos/vpm.json",
    author: {
      name: "whiteflare",
      url: "https://github.com/whiteflare/AvatarTools",
    },
    dependencies: {
      "com.vrchat.avatars": "^3.1.13",
    },
    keywords: [],
    license: "MIT",
    licensesUrl: "https://raw.githubusercontent.com/whiteflare/AvatarTools/master/LICENSE.txt",
  },
  "de.thryrallo.vrc.avatar-performance-tools": {
    name: "de.thryrallo.vrc.avatar-performance-tools",
    displayName: "Thry's Avatar Performance Tools",
    description: "Calculates and evaluates multiple avatar metrics that are not currently taken into account by VRChat's ranking system. Most prominently, it gives you a breakdown of VRAM usage of different parts of your avatar.",
    listUrl: "https://vpm.thry.dev/index.json",
    author: {
      name: "Thryrallo",
      url: "https://github.com/Thryrallo/VRC-Avatar-Performance-Tools",
    },
    dependencies: {},
    keywords: [],
    license: "MIT",
    licensesUrl: "https://raw.githubusercontent.com/Thryrallo/VRC-Avatar-Performance-Tools/master/LICENSE",
  },
  "net.narazaka.unity.missing-scripts": {
    name: "net.narazaka.unity.missing-scripts",
    displayName: "Check Missing Scripts",
    description: "Find Missing Scripts in the current scene.",
    listUrl: "https://vpm.narazaka.net/index.json",
    author: {
      name: "Narazaka",
      url: "https://github.com/Narazaka/CheckMissingScripts",
    },
    dependencies: {},
    keywords: [],
    license: "Zlib",
    licensesUrl: "https://raw.githubusercontent.com/Narazaka/CheckMissingScripts/master/LICENSE.txt",
  },
  "net.nekobako.editor-patcher": {
    name: "net.nekobako.editor-patcher",
    displayName: "Editor Patcher",
    description: "Tools to enhance the Unity Editor",
    listUrl: "https://vpm.nekobako.net/index.json",
    author: {
      name: "nekobako",
      url: "https://github.com/nekobako/EditorPatcher",
    },
    dependencies: {
      "com.vrchat.base": ">=3.4.2",
    },
    keywords: [],
    license: "MIT",
    licensesUrl: "https://raw.githubusercontent.com/nekobako/EditorPatcher/main/LICENSE.md",
  },
  "net.raitichan.avatar.bulk-uploader": {
    name: "net.raitichan.avatar.bulk-uploader",
    displayName: "Bulk Uploader",
    description: "複数アバターを一括でアップロードします",
    listUrl: "https://vpm.raitichan.net/vpm.json",
    author: {
      name: "Raitichan",
      url: "https://github.com/raiti-chan/Bulk-Uploader",
    },
    dependencies: {
      "com.vrchat.avatars": ">=3.5.0",
    },
    keywords: [],
    license: "MIT",
    licensesUrl: "https://raw.githubusercontent.com/raiti-chan/Bulk-Uploader/main/LICENSE",
  },
  "com.aoyon.git-acutomation": {
    name: "com.aoyon.git-acutomation",
    displayName: "Git Automation",
    description: "A tool for git.",
    listUrl: "https://tliks.github.io/vpm-repos/index.json",
    author: {
      name: "Ao_425",
      url: "https://github.com/Tliks/GitAutomation",
    },
    dependencies: {},
    keywords: [],
    license: "MIT",
    licensesUrl: "https://raw.githubusercontent.com/Tliks/GitAutomation/main/LICENSE",
  },
};

const setTheme = () => {
  const isDarkTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkTheme()) {
    baseLayerLuminance.setValueFor(document.documentElement, StandardLuminance.DarkMode);
  } else {
    baseLayerLuminance.setValueFor(document.documentElement, StandardLuminance.LightMode);
  }
};

(() => {
  setTheme();

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    setTheme();
  });

  const packageGrid = document.getElementById("packageGrid");

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", ({ target: { value = "" } }) => {
    const items = packageGrid.querySelectorAll('fluent-data-grid-row[row-type="default"]');
    items.forEach((item) => {
      if (value === "") {
        item.style.display = "grid";
        return;
      }
      if (item.dataset?.packageName?.toLowerCase()?.includes(value.toLowerCase()) || item.dataset?.packageId?.toLowerCase()?.includes(value.toLowerCase())) {
        item.style.display = "grid";
      } else {
        item.style.display = "none";
      }
    });
  });

  const urlBarHelpButton = document.getElementById("urlBarHelp");
  const addListingToVccHelp = document.getElementById("addListingToVccHelp");
  urlBarHelpButton.addEventListener("click", () => {
    addListingToVccHelp.hidden = false;
  });
  const addListingToVccHelpClose = document.getElementById("addListingToVccHelpClose");
  addListingToVccHelpClose.addEventListener("click", () => {
    addListingToVccHelp.hidden = true;
  });

  const vccListingInfoUrlFieldCopy = document.getElementById("vccListingInfoUrlFieldCopy");
  vccListingInfoUrlFieldCopy.addEventListener("click", () => {
    const vccUrlField = document.getElementById("vccListingInfoUrlField");
    vccUrlField.select();
    navigator.clipboard.writeText(vccUrlField.value);
    vccUrlFieldCopy.appearance = "accent";
    setTimeout(() => {
      vccUrlFieldCopy.appearance = "neutral";
    }, 1000);
  });

  const vccAddRepoButton = document.getElementById("vccAddRepoButton");
  vccAddRepoButton.addEventListener("click", () => window.location.assign(`vcc://vpm/addRepo?url=${encodeURIComponent(LISTING_URL)}`));

  const vccUrlFieldCopy = document.getElementById("vccUrlFieldCopy");
  vccUrlFieldCopy.addEventListener("click", () => {
    const vccUrlField = document.getElementById("vccUrlField");
    vccUrlField.select();
    navigator.clipboard.writeText(vccUrlField.value);
    vccUrlFieldCopy.appearance = "accent";
    setTimeout(() => {
      vccUrlFieldCopy.appearance = "neutral";
    }, 1000);
  });

  const rowMoreMenu = document.getElementById("rowMoreMenu");
  const hideRowMoreMenu = (e) => {
    if (rowMoreMenu.contains(e.target)) return;
    document.removeEventListener("click", hideRowMoreMenu);
    rowMoreMenu.hidden = true;
  };

  const rowMenuButtons = document.querySelectorAll(".rowMenuButton");
  rowMenuButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (rowMoreMenu?.hidden) {
        rowMoreMenu.style.top = `${e.clientY + e.target.clientHeight}px`;
        rowMoreMenu.style.left = `${e.clientX - 120}px`;
        rowMoreMenu.hidden = false;

        const downloadLink = rowMoreMenu.querySelector("#rowMoreMenuDownload");
        const downloadListener = () => {
          window.open(e?.target?.dataset?.packageUrl, "_blank");
        };
        downloadLink.addEventListener("change", () => {
          downloadListener();
          downloadLink.removeEventListener("change", downloadListener);
        });

        setTimeout(() => {
          document.addEventListener("click", hideRowMoreMenu);
        }, 1);
      }
    });
  });

  const packageInfoModal = document.getElementById("packageInfoModal");
  const packageInfoModalClose = document.getElementById("packageInfoModalClose");
  packageInfoModalClose.addEventListener("click", () => {
    packageInfoModal.hidden = true;
  });

  // Fluent dialogs use nested shadow-rooted elements, so we need to use JS to style them
  const modalControl = packageInfoModal.shadowRoot.querySelector(".control");
  modalControl.style.maxHeight = "90%";
  modalControl.style.transition = "height 0.2s ease-in-out";
  modalControl.style.overflowY = "hidden";

  const packageInfoName = document.getElementById("packageInfoName");
  const packageInfoId = document.getElementById("packageInfoId");
  const packageInfoDescription = document.getElementById("packageInfoDescription");
  const packageInfoVccUrlField = document.getElementById("packageInfoVccUrlField");
  const packageInfoAuthor = document.getElementById("packageInfoAuthor");
  const packageInfoDependencies = document.getElementById("packageInfoDependencies");
  const packageInfoKeywords = document.getElementById("packageInfoKeywords");
  const packageInfoLicense = document.getElementById("packageInfoLicense");

  const rowAddToVccButtons = document.querySelectorAll(".rowAddToVccButton");
  rowAddToVccButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const packageId = e.target.dataset?.packageId;
      const packageInfo = PACKAGES?.[packageId];
      if (!packageInfo) {
        console.error(`Did not find package ${packageId}. Packages available:`, PACKAGES);
        return;
      }

      window.location.assign(`vcc://vpm/addRepo?url=${encodeURIComponent(packageInfo.listUrl)}`);
    });
  });

  const rowPackageInfoButton = document.querySelectorAll(".rowPackageInfoButton");
  rowPackageInfoButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      const packageId = e.target.dataset?.packageId;
      const packageInfo = PACKAGES?.[packageId];
      if (!packageInfo) {
        console.error(`Did not find package ${packageId}. Packages available:`, PACKAGES);
        return;
      }

      packageInfoName.textContent = packageInfo.displayName;
      packageInfoId.textContent = packageId;
      packageInfoDescription.textContent = packageInfo.description;
      packageInfoVccUrlField.value = packageInfo.listUrl;
      vccListingInfoUrlField.value = packageInfo.listUrl;
      packageInfoAuthor.textContent = packageInfo.author.name;
      packageInfoAuthor.href = packageInfo.author.url;

      if ((packageInfo.keywords?.length ?? 0) === 0) {
        packageInfoKeywords.parentElement.classList.add("hidden");
      } else {
        packageInfoKeywords.parentElement.classList.remove("hidden");
        packageInfoKeywords.innerHTML = null;
        packageInfo.keywords.forEach((keyword) => {
          const keywordDiv = document.createElement("div");
          keywordDiv.classList.add("me-2", "mb-2", "badge");
          keywordDiv.textContent = keyword;
          packageInfoKeywords.appendChild(keywordDiv);
        });
      }

      if (!packageInfo.license?.length && !packageInfo.licensesUrl?.length) {
        packageInfoLicense.parentElement.classList.add("hidden");
      } else {
        packageInfoLicense.parentElement.classList.remove("hidden");
        packageInfoLicense.textContent = packageInfo.license ?? "See License";
        packageInfoLicense.href = packageInfo.licensesUrl ?? "#";
      }

      packageInfoDependencies.innerHTML = null;
      Object.entries(packageInfo.dependencies).forEach(([name, version]) => {
        const depRow = document.createElement("li");
        depRow.classList.add("mb-2");
        depRow.textContent = `${name} @ v${version}`;
        packageInfoDependencies.appendChild(depRow);
      });

      packageInfoModal.hidden = false;

      setTimeout(() => {
        const height = packageInfoModal.querySelector(".col").clientHeight;
        modalControl.style.setProperty("--dialog-height", `${height + 14}px`);
      }, 1);
    });
  });

  const packageInfoVccUrlFieldCopy = document.getElementById("packageInfoVccUrlFieldCopy");
  packageInfoVccUrlFieldCopy.addEventListener("click", () => {
    const vccUrlField = document.getElementById("packageInfoVccUrlField");
    vccUrlField.select();
    navigator.clipboard.writeText(vccUrlField.value);
    vccUrlFieldCopy.appearance = "accent";
    setTimeout(() => {
      vccUrlFieldCopy.appearance = "neutral";
    }, 1000);
  });

  const packageInfoListingHelp = document.getElementById("packageInfoListingHelp");
  packageInfoListingHelp.addEventListener("click", () => {
    addListingToVccHelp.hidden = false;
  });
})();
