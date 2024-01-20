(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{496:function(s,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("介绍")]),s._v(" "),a("p",[s._v("在 Rust 开发中，能够从单一开发环境（如 macOS）为不同操作系统生成可执行文件是一项强大且实用的技能。本文将指导您如何在 macOS 系统上分别构建适用于 Linux 和 Windows 的 Rust 应用程序，并介绍两种主要的实现方法。")])]),s._v(" "),a("h1",{attrs:{id:"在-macos-上跨平台编译-rust-应用程序至-linux-和-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-macos-上跨平台编译-rust-应用程序至-linux-和-windows"}},[s._v("#")]),s._v(" 在 macOS 上跨平台编译 Rust 应用程序至 Linux 和 Windows")]),s._v(" "),a("p",[s._v("在 Rust 开发中，能够从单一开发环境（如 macOS）为不同操作系统生成可执行文件是一项强大且实用的技能。本文将指导您如何在 macOS 系统上分别构建适用于 Linux 和 Windows 的 Rust 应用程序，并介绍两种主要的实现方法。")]),s._v(" "),a("h3",{attrs:{id:"第一种方式-本地安装依赖并编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种方式-本地安装依赖并编译"}},[s._v("#")]),s._v(" 第一种方式：本地安装依赖并编译")]),s._v(" "),a("h4",{attrs:{id:"编译为-linux-可执行文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译为-linux-可执行文件"}},[s._v("#")]),s._v(" 编译为 Linux 可执行文件")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("安装 Musl Cross-Compiler")]),s._v("：\n利用 Homebrew 安装 Musl 交叉编译器套件以支持在 macOS 上为 Linux 构建。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" FiloSottile/musl-cross/musl-cross\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("配置 Rust 目标平台")]),s._v("：\n使用 "),a("code",[s._v("rustup")]),s._v(" 添加 x86_64 架构 Linux（基于 Musl C 库）的目标平台。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rustup target "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" x86_64-unknown-linux-musl\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("项目链接器设置")]),s._v("：\n在项目的 "),a("code",[s._v(".cargo/config.toml")]),s._v(" 文件中指定 Musl 链接器路径。")]),s._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("target.x86_64-unknown-linux-musl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("linker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x86_64-linux-musl-gcc"')]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("构建 Linux 版本项目")]),s._v("：\n执行以下命令进行编译，生成适用于 Linux 的 release 版本可执行文件。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cargo")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--release")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--target")]),s._v(" x86_64-unknown-linux-musl\n")])])])])]),s._v(" "),a("h4",{attrs:{id:"编译为-windows-可执行文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译为-windows-可执行文件"}},[s._v("#")]),s._v(" 编译为 Windows 可执行文件")]),s._v(" "),a("p",[s._v("针对 Windows 平台，我们需要借助 "),a("code",[s._v("cargo-xwin")]),s._v(" 工具及 LLVM 组件：")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("安装 "),a("code",[s._v("cargo-xwin")])]),s._v("：\n使用 "),a("code",[s._v("cargo")]),s._v(" 命令行工具安装 "),a("code",[s._v("cargo-xwin")]),s._v(" 插件。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cargo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cargo-xwin\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("安装 LLVM")]),s._v("：\n通过 Homebrew 获取 LLVM，确保 Windows 目标编译所需组件已就绪。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" llvm\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("更新环境变量")]),s._v("：\n将 LLVM bin 目录添加到系统 PATH 中，使 "),a("code",[s._v("cargo-xwin")]),s._v(" 能找到相关工具。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/homebrew/Cellar/llvm/17.0.6/bin:'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("添加 Windows 目标平台")]),s._v("：\n使用 "),a("code",[s._v("rustup")]),s._v(" 添加支持 x86_64 架构 Windows（使用 MSVC 工具链）的目标平台。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rustup target "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" x86_64-pc-windows-msvc\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("构建 Windows 版本项目")]),s._v("：\n运行 "),a("code",[s._v("cargo-xwin")]),s._v(" 来完成 Windows 版本的编译工作。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cargo")]),s._v(" xwin build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--release")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--target")]),s._v(" x86_64-pc-windows-msvc\n")])])])])]),s._v(" "),a("h3",{attrs:{id:"第二种方式-利用-cross-工具简化跨平台编译流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种方式-利用-cross-工具简化跨平台编译流程"}},[s._v("#")]),s._v(" 第二种方式：利用 "),a("code",[s._v("cross")]),s._v(" 工具简化跨平台编译流程")]),s._v(" "),a("p",[a("strong",[s._v("使用 "),a("code",[s._v("cross")]),s._v(" 实现 Docker 容器内编译")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/cross-rs/cross",target:"_blank",rel:"noopener noreferrer"}},[s._v("cross-rs/cross"),a("OutboundLink")],1),s._v(" 是一个通过 Docker 容器技术优化跨平台编译过程的强大工具。其工作原理概括如下：")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("准备容器环境")]),s._v("：\n根据目标平台（Linux 或 Windows），"),a("code",[s._v("cross")]),s._v(" 自动下载或创建包含对应平台构建工具链、Rust 工具和必要库的 Docker 镜像。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("挂载源代码至容器")]),s._v("：\n当运行 "),a("code",[s._v("cross")]),s._v(" 命令时，会自动将本地项目源码目录映射到 Docker 容器内部。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("容器内部编译")]),s._v("：\n"),a("code",[s._v("cross")]),s._v(" 根据目标平台在容器内部调用相应的 Rust 工具链进行编译。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("同步结果至主机")]),s._v("：\n编译完成后，生成的二进制文件存储于容器内的特定路径，并通过 Docker 卷映射功能回传至宿主 macOS 系统。")])])]),s._v(" "),a("p",[a("strong",[s._v("使用 "),a("code",[s._v("cross")]),s._v(" 进行编译步骤")])]),s._v(" "),a("p",[s._v("首先，通过 Cargo 安装 "),a("code",[s._v("cross")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cargo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cross\n")])])]),a("p",[s._v("然后，在项目根目录下配置 "),a("code",[s._v("Cross.toml")]),s._v(" 文件，考虑到国内网络问题，可以自定义镜像地址：")]),s._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("target.x86_64-unknown-linux-gnu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("xargo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("image")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"togettoyou/ghcr.io.cross-rs.x86_64-unknown-linux-gnu:main"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("target.x86_64-pc-windows-gnu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("xargo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("image")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"togettoyou/ghcr.io.cross-rs.x86_64-pc-windows-gnu:main"')]),s._v("\n")])])]),a("p",[s._v("最后，运行 "),a("code",[s._v("cross")]),s._v(" 命令编译 Windows 版本应用：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("cross build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--target")]),s._v(" x86_64-pc-windows-gnu\n")])])]),a("p",[s._v("成功编译后，可在项目 "),a("code",[s._v("target")]),s._v(" 目录下找到相应平台的可执行文件。")]),s._v(" "),a("p",[a("img",{attrs:{src:"2024-01-16.assets/image-20240120111902247.png",alt:"image-20240120111902247"}})]),s._v(" "),a("p",[s._v("参考资料：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.yasking.org/a/rust-macos-build-musl-linux.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("在 macOS 下将 Rust 交叉编译为目标为 Linux musl 的应用程序"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/rust-cross/cargo-xwin",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github: rust-cross/cargo-xwin"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://words.filippo.io/easy-windows-and-linux-cross-compilers-for-macos/",target:"_blank",rel:"noopener noreferrer"}},[s._v("简易教程：在 macOS 上搭建用于 Windows 和 Linux 的交叉编译器 (filippo.io)"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://blog.fudenglong.site/2023/02/26/Rust/cross/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【Rust】利用 Cross 实现跨平台编译 | MichaelFu (fudenglong.site)"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);