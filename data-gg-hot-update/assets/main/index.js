System.register("chunks:///_virtual/Config2.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "88569lWQ+JFn5vEw3D1TQos", "Config", undefined);

      /**
       * 环境类型
       */
      let Environment = exports('Environment', /*#__PURE__*/function (Environment) {
        Environment["Development"] = "development";
        Environment["Test"] = "test";
        Environment["Production"] = "production";
        return Environment;
      }({}));

      /**
       * 全局配置
       */
      class Config {
        /**
         * 初始化配置
         */
        static init() {
          // 检测环境
          this.detectEnvironment();

          // 根据环境设置默认配置
          this.applyEnvironmentConfig();
          console.log('[Config] 环境:', this.ENV);
          console.log('[Config] 调试模式:', this.DEBUG);
        }

        /**
         * 检测运行环境
         */
        static detectEnvironment() {
          // Cocos Creator 编辑器预览
          if (globalThis.CC_PREVIEW || globalThis.CC_EDITOR) {
            this.ENV = Environment.Development;
            return;
          }
          if (sys.isBrowser) {
            const hostname = window.location.hostname;
            if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') {
              this.ENV = Environment.Development;
            } else if (hostname.includes('test') || hostname.includes('staging')) {
              this.ENV = Environment.Test;
            } else {
              this.ENV = Environment.Production;
            }
          } else {
            // 原生平台默认为生产环境
            this.ENV = Environment.Production;
          }
        }

        /**
         * 应用环境配置
         */
        static applyEnvironmentConfig() {
          switch (this.ENV) {
            case Environment.Development:
              this.DEBUG = true;
              this.LOG_LEVEL = 'debug';
              this.API_CONFIG_URL = 'https://static-resources-hoster-snowy.vercel.app/config';
              this.CDN_BASE = 'https://static-resources-hoster-snowy.vercel.app/hot-update-packages';
              this.ENABLE_MD5_CHECK = false; // 开发环境关闭 MD5 校验
              break;
            case Environment.Test:
              this.DEBUG = true;
              this.LOG_LEVEL = 'info';
              this.API_CONFIG_URL = 'https://static-resources-hoster-snowy.vercel.app/config';
              this.CDN_BASE = 'https://static-resources-hoster-snowy.vercel.app/hot-update-packages';
              break;
            case Environment.Production:
              this.DEBUG = false;
              this.LOG_LEVEL = 'warn';
              this.API_CONFIG_URL = 'https://static-resources-hoster-snowy.vercel.app/config';
              this.CDN_BASE = 'https://static-resources-hoster-snowy.vercel.app/hot-update-packages';
              break;
          }
        }

        /**
         * 设置产品配置
         */
        static setProductConfig(cdnBase) {
          this.CDN_BASE = cdnBase;
          console.log('[Config] CDN Base:', this.CDN_BASE);
        }
      }
      exports('Config', Config);
      /** 当前环境 */
      Config.ENV = Environment.Production;
      /** 是否开启调试 */
      Config.DEBUG = false;
      /** 日志级别 */
      Config.LOG_LEVEL = 'info';
      /** API 配置地址 */
      Config.API_CONFIG_URL = '';
      /** CDN 基础地址 */
      Config.CDN_BASE = '';
      /** 请求超时时间（毫秒） */
      Config.REQUEST_TIMEOUT = 30000;
      /** 最大重试次数 */
      Config.MAX_RETRY_COUNT = 3;
      /** 是否启用 MD5 校验 */
      Config.ENABLE_MD5_CHECK = true;
      /** localStorage key: 本地版本记录 */
      Config.STORAGE_KEY_LOCAL_MANIFEST = 'local_manifest';
      /** localStorage key: 调试包名 */
      Config.STORAGE_KEY_DEBUG_PACKAGE = 'debug_package_name';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FileUtils.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3f0ec7cRhNJ85VX25sE1Gst", "FileUtils", undefined);

      /**
       * 文件操作工具类
       *
       * 封装 JSB 文件操作，支持原生平台
       */
      class FileUtils {
        /**
         * 检查是否是原生平台
         */
        static isNative() {
          return sys.isNative;
        }

        /**
         * 获取可写路径
         */
        static getWritablePath() {
          if (!this.isNative()) {
            return '/';
          }
          return jsb.fileUtils.getWritablePath();
        }

        /**
         * 检查文件是否存在
         */
        static isFileExist(filePath) {
          if (!this.isNative()) {
            return false;
          }
          return jsb.fileUtils.isFileExist(filePath);
        }

        /**
         * 检查目录是否存在
         */
        static isDirectoryExist(dirPath) {
          if (!this.isNative()) {
            return false;
          }
          return jsb.fileUtils.isDirectoryExist(dirPath);
        }

        /**
         * 创建目录
         */
        static createDirectory(dirPath) {
          if (!this.isNative()) {
            return false;
          }
          return jsb.fileUtils.createDirectory(dirPath);
        }

        /**
         * 删除文件
         */
        static removeFile(filePath) {
          if (!this.isNative()) {
            return false;
          }
          return jsb.fileUtils.removeFile(filePath);
        }

        /**
         * 删除目录
         */
        static removeDirectory(dirPath) {
          if (!this.isNative()) {
            return false;
          }
          return jsb.fileUtils.removeDirectory(dirPath);
        }

        /**
         * 写入数据到文件
         */
        static writeDataToFile(data, filePath) {
          if (!this.isNative()) {
            console.warn('[FileUtils] writeDataToFile 仅支持原生平台');
            return false;
          }
          try {
            // 确保父目录存在
            const dirPath = this.getDirName(filePath);
            if (!this.isDirectoryExist(dirPath)) {
              this.createDirectory(dirPath);
            }
            return jsb.fileUtils.writeDataToFile(data, filePath);
          } catch (error) {
            console.error('[FileUtils] writeDataToFile 失败:', error);
            return false;
          }
        }

        /**
         * 从文件读取数据
         */
        static getDataFromFile(filePath) {
          if (!this.isNative()) {
            throw new Error('[FileUtils] getDataFromFile 仅支持原生平台');
          }
          return jsb.fileUtils.getDataFromFile(filePath);
        }

        /**
         * 从文件读取字符串
         */
        static getStringFromFile(filePath) {
          if (!this.isNative()) {
            throw new Error('[FileUtils] getStringFromFile 仅支持原生平台');
          }
          return jsb.fileUtils.getStringFromFile(filePath);
        }

        /**
         * 写入字符串到文件
         */
        static writeStringToFile(str, filePath) {
          if (!this.isNative()) {
            console.warn('[FileUtils] writeStringToFile 仅支持原生平台');
            return false;
          }
          try {
            // 确保父目录存在
            const dirPath = this.getDirName(filePath);
            if (!this.isDirectoryExist(dirPath)) {
              this.createDirectory(dirPath);
            }
            return jsb.fileUtils.writeStringToFile(str, filePath);
          } catch (error) {
            console.error('[FileUtils] writeStringToFile 失败:', error);
            return false;
          }
        }

        /**
         * 重命名文件或目录
         */
        static renameFile(oldPath, newPath) {
          if (!this.isNative()) {
            console.warn('[FileUtils] renameFile 仅支持原生平台');
            return false;
          }
          return jsb.fileUtils.renameFile(oldPath, newPath);
        }

        /**
         * 获取文件大小
         */
        static getFileSize(filePath) {
          if (!this.isNative()) {
            return 0;
          }
          return jsb.fileUtils.getFileSize(filePath);
        }

        /**
         * 列出目录内容
         */
        static listFiles(dirPath) {
          if (!this.isNative()) {
            return [];
          }
          return jsb.fileUtils.listFiles(dirPath);
        }

        /**
         * 获取目录名
         */
        static getDirName(filePath) {
          const lastSlash = Math.max(filePath.lastIndexOf('/'), filePath.lastIndexOf('\\'));
          if (lastSlash > 0) {
            return filePath.substring(0, lastSlash);
          }
          return '';
        }

        /**
         * 获取文件名
         */
        static getFileName(filePath) {
          const lastSlash = Math.max(filePath.lastIndexOf('/'), filePath.lastIndexOf('\\'));
          if (lastSlash >= 0) {
            return filePath.substring(lastSlash + 1);
          }
          return filePath;
        }

        /**
         * 获取文件扩展名
         */
        static getExtension(filePath) {
          const lastDot = filePath.lastIndexOf('.');
          if (lastDot > 0) {
            return filePath.substring(lastDot);
          }
          return '';
        }

        /**
         * 连接路径
         */
        static joinPath(...parts) {
          let result = parts[0] || '';
          for (let i = 1; i < parts.length; i++) {
            const part = parts[i];
            if (!part) continue;

            // 移除开头的斜杠
            const cleanPart = part.replace(/^[\/\\]+/, '');

            // 确保 result 以斜杠结尾
            if (result && !result.endsWith('/') && !result.endsWith('\\')) {
              result += '/';
            }
            result += cleanPart;
          }
          return result;
        }

        /**
         * 复制文件
         */
        static copyFile(srcPath, destPath) {
          if (!this.isNative()) {
            console.warn('[FileUtils] copyFile 仅支持原生平台');
            return false;
          }
          try {
            // 读取源文件
            const data = this.getDataFromFile(srcPath);

            // 写入目标文件
            return this.writeDataToFile(data, destPath);
          } catch (error) {
            console.error('[FileUtils] copyFile 失败:', error);
            return false;
          }
        }

        /**
         * 移动文件/目录
         */
        static moveFile(srcPath, destPath) {
          if (!this.isNative()) {
            console.warn('[FileUtils] moveFile 仅支持原生平台');
            return false;
          }

          // 先重命名（移动）
          const success = this.renameFile(srcPath, destPath);

          // 如果重命名失败，尝试复制然后删除
          if (!success) {
            try {
              if (this.isDirectoryExist(srcPath)) {
                // 目录：需要递归复制
                return this.copyDirectory(srcPath, destPath) && this.removeDirectory(srcPath);
              } else {
                // 文件：复制然后删除
                return this.copyFile(srcPath, destPath) && this.removeFile(srcPath);
              }
            } catch (error) {
              console.error('[FileUtils] moveFile 失败:', error);
              return false;
            }
          }
          return true;
        }

        /**
         * 复制目录
         */
        static copyDirectory(srcDir, destDir) {
          if (!this.isNative()) {
            console.warn('[FileUtils] copyDirectory 仅支持原生平台');
            return false;
          }
          try {
            // 创建目标目录
            if (!this.isDirectoryExist(destDir)) {
              this.createDirectory(destDir);
            }

            // listFiles 返回的是绝对路径
            const files = this.listFiles(srcDir);

            // 确保 srcDir 以 / 结尾用于计算相对路径
            const normalizedSrc = srcDir.endsWith('/') ? srcDir : srcDir + '/';
            for (const absPath of files) {
              // 计算相对路径
              const relativePath = absPath.startsWith(normalizedSrc) ? absPath.substring(normalizedSrc.length) : this.getFileName(absPath);
              const destPath = this.joinPath(destDir, relativePath);
              if (this.isDirectoryExist(absPath)) {
                this.copyDirectory(absPath, destPath);
              } else {
                this.copyFile(absPath, destPath);
              }
            }
            return true;
          } catch (error) {
            console.error('[FileUtils] copyDirectory 失败:', error);
            return false;
          }
        }
      }
      exports('FileUtils', FileUtils);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GGEventManager.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2fe728DsD9M6oT3l/q13e7U", "GGEventManager", undefined);
      /**
       * 缓存事件
       */
      /**
       * 默认事件管理器
       *
       * @author caizhitao
       * @created 2026-01-19 16:51:55
       */
      class GGEventManager {
        constructor() {
          /**
           * key: 事件名
           * value: 缓存事件
           */
          this._eventCacheMap = new Map();
        }
        /**
         * 广播事件
         *
         * @param eventName 事件名
         * @param param 传递的剩余不定参数
         */
        emit(eventName, ...param) {
          const eventCacheArray = this._eventCacheMap.get(eventName);
          if (eventCacheArray) {
            for (let i = eventCacheArray.length - 1; i >= 0; i--) {
              const eventCache = eventCacheArray[i];
              if (!eventCache) {
                continue;
              }
              // call 方法的语法和作用与 apply() 方法类似
              // 只有一个区别
              // 就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。
              eventCache.callback.apply(eventCache.target, param);

              // 只接受一次回调的事件，在触发之后就移除掉该缓存事件
              if (eventCache.once) {
                eventCacheArray.splice(i, 1);

                // 如果移除后，事件已经没有回调函数了，就删除这个事件
                if (eventCacheArray.length == 0) {
                  this._eventCacheMap.delete(eventName);
                }
              }
            }
          }
        }

        /**
         * 注册事件
         *
         * @param eventName 事件名
         * @param callback 事件处理函数
         * @param target 事件处理函数的执行对象
         */
        on(eventName, callback, target) {
          this._on(eventName, callback, target, false);
        }

        /**
         * 注册事件（接受函数执行一次后会自动销毁，不用主动off）
         *
         * @param eventName 事件名
         * @param callback 事件处理函数
         * @param target 事件处理函数的执行对象
         */
        onOnce(eventName, callback, target) {
          this._on(eventName, callback, target, true);
        }

        /**
         * 注册事件
         *
         * @param eventName 事件名
         * @param callback 事件处理函数
         * @param target 事件处理函数的执行对象
         * @param once 是否只回调一次
         */
        _on(eventName, callback, target, once) {
          let eventCacheArray = this._eventCacheMap.get(eventName);
          if (!eventCacheArray) {
            eventCacheArray = [];
          }
          let index = eventCacheArray.findIndex(eventCache => {
            return eventCache.target === target && eventCache.callback === callback;
          });
          if (index === -1) {
            eventCacheArray.push({
              target: target,
              callback: callback,
              once: once
            });
            this._eventCacheMap.set(eventName, eventCacheArray);
          }
        }

        /**
         * 注销事件
         *
         * @param eventName 事件名
         * @param callback 事件处理函数
         * @param target 事件处理函数的执行对象
         */
        off(eventName, callback, target) {
          let eventCacheArray = this._eventCacheMap.get(eventName);
          if (eventCacheArray) {
            if (callback && target) {
              let index = eventCacheArray.findIndex(eventCache => {
                return eventCache.target === target && eventCache.callback === callback;
              });
              if (index !== -1) {
                eventCacheArray.splice(index, 1);
                // 如果移除后，事件已经没有回调函数了，就删除这个事件
                if (eventCacheArray.length == 0) {
                  this._eventCacheMap.delete(eventName);
                }
              }
            } else {
              eventCacheArray = undefined;
              this._eventCacheMap.delete(eventName);
            }
          }
        }

        /**
         * 注销某个已经注册的对象的所有事件
         *
         * @param target 事件函数处理的执行对象
         */
        offTarget(target) {
          this._eventCacheMap.forEach((eventCacheArray, eventName) => {
            if (eventCacheArray) {
              for (let i = eventCacheArray.length - 1; i >= 0; i--) {
                if (eventCacheArray[i].target === target) {
                  eventCacheArray.splice(i, 1);
                }
              }
              // 如果移除后，事件已经没有回调函数了，就删除这个事件
              if (eventCacheArray.length == 0) {
                this._eventCacheMap.delete(eventName);
              }
            }
          });
        }

        /**
         * 清空所有事件
         */
        destroy() {
          this._eventCacheMap.clear();
        }
      }
      exports('GGEventManager', GGEventManager);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GGHotUpdateInstance.ts", ['cc', './env', './GGZip.ts', './GGZipTypes.ts', './GGLogger.ts', './GGObserverSystem.ts', './GGHotUpdateType.ts'], function (exports) {
  var cclegacy, path, native, DEBUG, ggZip, GGZipExtractZipTaskEvent, GGZipExtractZipStatus, ggLogger, GGObserverSystem, GGHotUpdateInstanceState, GGHotUpdateType, ProjectManifestAssetUpdateState, GGHotUpdateInstanceEnum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      path = module.path;
      native = module.native;
    }, function (module) {
      DEBUG = module.DEBUG;
    }, function (module) {
      ggZip = module.ggZip;
    }, function (module) {
      GGZipExtractZipTaskEvent = module.GGZipExtractZipTaskEvent;
      GGZipExtractZipStatus = module.GGZipExtractZipStatus;
    }, function (module) {
      ggLogger = module.ggLogger;
    }, function (module) {
      GGObserverSystem = module.GGObserverSystem;
    }, function (module) {
      GGHotUpdateInstanceState = module.GGHotUpdateInstanceState;
      GGHotUpdateType = module.GGHotUpdateType;
      ProjectManifestAssetUpdateState = module.ProjectManifestAssetUpdateState;
      GGHotUpdateInstanceEnum = module.GGHotUpdateInstanceEnum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3219b6bqEFIsqL1K82HnnOx", "GGHotUpdateInstance", undefined);

      /**
       * 热更新实例观察者方法
       *
       * @author caizhitao
       * @created 2024-08-30 10:40:53
       */

      /**
       * 热更新实例
       *
       * @author caizhitao
       * @created 2024-08-30 10:40:53
       */
      class GGHotUpdateInstance extends GGObserverSystem {
        /**
         * 当前热更新实例状态
         */
        get state() {
          return this._state;
        }
        /**
         * 待下载的总字节
         */
        get totalBytes() {
          return this._totalBytes;
        }
        /**
         * 已下载的字节
         */
        get downloadedBytes() {
          return this._downloadedBytes;
        }
        /**
         * 待下载的文件列表
         */
        get totalFiles() {
          return this._totalFiles;
        }
        /**
         * 热更新下载速度 Bytes/s
         */
        get downloadSpeedInSecond() {
          return this._downloadSpeed;
        }
        /**
         * 下载剩余时间(s)
         *
         * * >=0: 已知剩余秒数
         * * <0: 未知剩余时间
         */
        get downloadRemainTimeInSecond() {
          return this._downloadRemainTimeInSecond;
        }
        /**
         * Zip 总解压字节数，注意值可能为0的情况
         */
        get zipExtractTotalBytes() {
          return this._zipExtractTotalBytes;
        }
        /**
         * Zip 已解压字节数，注意值可能为0的情况
         */
        get zipExtractedBytes() {
          return this._zipExtractedBytes;
        }
        /**
         * @param name 热更新的包名字
         * @param remoteRootUrl 热更包的远程根地址 e.g. ``http://192.168.0.1:8080/1.0.0``
         * @param searchRootDirPath 热更包的本地搜索根目录 e.g. ``/data/user/0/${pacakgeName}/files/gg-hot-update``
         * @param option 热更新实例配置
         */
        constructor(name, remoteRootUrl, searchRootDirPath, option) {
          super();
          /**
           * 热更新的包名字
           */
          this.name = void 0;
          /**
           * 热更新实例配置
           */
          this._option = void 0;
          /**
           * 热更新文件的远程根地址
           *
           * e.g.
           *
           * ``http://192.168.0.1:8080/1.0.0``
           */
          this._remoteRootUrl = void 0;
          /**
           * 热更包的本地搜索根目录
           *
           * e.g.
           *
           * * Android: ``/data/user/0/com.cocos.game/files/gg-hot-update``
           */
          this._searchRootDirPath = void 0;
          /**
           * 热更包的本地下载根目录
           *
           * * 主包：如果热更新成功，那么会在下次游戏启动时，将下载目录的内容移动到搜索目录
           * * 子包：如果热更新成功，那么会在此时， 将下载目录的内容移动到搜索目录
           *
           * e.g.
           *
           * * Android: ``/data/user/0/${packageName}/files/gg-hot-update-temp/${bundleName}``
           */
          this._downloadRootDirPath = void 0;
          /**
           * 热更包的 zip 远程地址
           *
           * e.g.
           *
           * ``http://192.168.0.1:8080/1.0.0/${bundleName}.zip``
           */
          this._zipRemoteUrl = void 0;
          /**
           * 热更包的 zip 的本地下载路径
           *
           * e.g.
           *
           * * Android: ``/data/user/0/${packageName}/files/gg-hot-update-temp/${bundleName}.zip``
           */
          this._zipDownloadPath = void 0;
          /**
           * version.manifest 的远程地址
           *
           * e.g.
           *
           * ``http://192.168.0.1:8080/1.0.0/${bundleName}.version.manifest``
           */
          this._versionManifestRemoteUrl = void 0;
          /**
           * version.manifeset 的本地下载路径
           *
           * e.g.
           *
           * * Android: ``/data/user/0/${packageName}/files/gg-hot-update-temp/${bundleName}/${bundleName}.version.manifest``
           */
          this._versionManifestDownloadPath = void 0;
          /**
           * project.manifest 的远程地址
           *
           * e.g.
           *
           * ``http://192.168.0.1:8080/1.0.0/${bundleName}.project.manifest``
           */
          this._projectManifestRemoteUrl = void 0;
          /**
           * project.manifeset 的搜索路径顺序
           *
           * e.g.
           *
           * * Android:
           *      * ``/data/user/0/${packageName}/files/gg-hot-update/${bundleName}.project.manifest``
           *      * ``@assets/${bundleName}.project.manifest``
           *      * ``data/${bundleName}/project.manifest"``
           */
          this._projectManifestSearchPaths = void 0;
          /**
           * project.manifeset 的本地下载路径
           *
           * e.g.
           *
           * * Android: ``/data/user/0/${packageName}/files/gg-hot-update-temp/${bundleName}/${bundleName}.project.manifest.gg``
           */
          this._projectManifestDownloadPath = void 0;
          /**
           * 本地 project.manifest 配置（搜索目录下）
           */
          this._localProjectManifest = void 0;
          /**
           * 远端 project.manifeset 配置
           */
          this._remoteProjectManifest = void 0;
          /**
           * 远端 version.manifeset 配置
           */
          this._remoteVersionManifest = void 0;
          /**
           * 实例是否已经销毁
           */
          this._destroyed = false;
          this._state = GGHotUpdateInstanceState.Idle;
          /**
           * 热更新方式
           */
          this._hotUpdateType = void 0;
          // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 下载信息
          /**
           * 下载任务管理器
           */
          this._downloader = void 0;
          /**
           * 下载任务队列
           */
          this._downloadTasks = void 0;
          /**
           * 当前并行下载任务数量
           */
          this._curConcurrentTaskCount = void 0;
          this._totalBytes = 0;
          this._downloadedBytes = 0;
          this._totalFiles = 0;
          /**
           * 下载成功的文件列表
           */
          this.downloadSucFiles = [];
          /**
           * 下载失败的文件列表
           */
          this.downloadFailedFiles = [];
          this._downloadSpeed = 0;
          this._downloadRemainTimeInSecond = -1;
          /**
           * 上次计算下载速度时的累计下载字节数(Bytes)
           */
          this._lastDownloadedBytes = 0;
          /**
           * 上次计算下载速度时的时间戳(ms)
           */
          this._lastSpeedUpdateTimeInMs = 0;
          /**
           * 上次回调下载进度的时间戳(ms)
           */
          this._lastCallBackUpdateTimeInMs = 0;
          // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 解压信息
          /**
           * 热更包的 zip 解压缩任务id
           */
          this._zipTaskId = null;
          this._zipExtractTotalBytes = 0;
          this._zipExtractedBytes = 0;
          this.name = name;
          this._option = option;
          this._remoteRootUrl = remoteRootUrl;
          this._searchRootDirPath = searchRootDirPath;
          this._downloadRootDirPath = path.join(this._searchRootDirPath + "-temp", this.name);
          this._zipRemoteUrl = `${this._remoteRootUrl}/${this.name}.zip`;
          this._zipDownloadPath = path.join(this._searchRootDirPath + "-temp", `${this.name}.zip`);
          this._versionManifestRemoteUrl = `${this._remoteRootUrl}/${this.name}.version.manifest`;
          this._versionManifestDownloadPath = path.join(this._downloadRootDirPath, `${this.name}.version.manifest`);
          this._projectManifestRemoteUrl = `${this._remoteRootUrl}/${this.name}.project.manifest`;
          this._projectManifestDownloadPath = path.join(this._downloadRootDirPath, `${this.name}.project.manifest.gg`);
          this._projectManifestSearchPaths = [path.join(this._searchRootDirPath, `${this.name}.project.manifest`), `@assets/${this.name}.project.manifest`, path.join("data", `${this.name}.project.manifest`)];
          this._localProjectManifest = null;
          this._remoteProjectManifest = null;
          this._remoteVersionManifest = null;
          this._destroyed = false;
          this._state = GGHotUpdateInstanceState.Idle;
          this._hotUpdateType = null;
          this._downloader = new native.Downloader();
          this._downloader.onProgress = this._onDownloadProgress.bind(this);
          this._downloader.onError = this._onDownloadError.bind(this);
          this._downloader.onSuccess = this._onDownloadSuccess.bind(this);
          this._downloadTasks = [];
          this._curConcurrentTaskCount = 0;
          this._resetDownloadInfo();
          this._zipTaskId = null;
          this._resetExtractInfo();
          if (ggZip.isAvailable) {
            ggZip.on(GGZipExtractZipTaskEvent.onExtractUpdated, this._onExtractUpdated, this);
          }
        }

        /**
         * 递归创建所有父目录
         *
         * @param filePath 目标文件路径
         */
        _createParentDirs(filePath) {
          // 获取目标路径的目录部分
          const dirPath = path.dirname(filePath);
          if (!native.fileUtils.isDirectoryExist(dirPath)) {
            // 如果父目录不存在，递归创建所有父目录
            this._createParentDirs(dirPath);
            // 创建当前目录
            native.fileUtils.createDirectory(dirPath);
          }
        }

        /**
         * 重置下载信息
         */
        _resetDownloadInfo() {
          // 移除还没有开始的下载任务
          if (this._downloadTasks.length > 0) {
            this._downloadTasks.length = 0;
          }

          // 重置并行下载任务数
          this._curConcurrentTaskCount = 0;

          // 重置下载信息
          this._totalBytes = 0;
          this._downloadedBytes = 0;
          this._totalFiles = 0;
          this.downloadSucFiles.length = 0;
          this.downloadFailedFiles.length = 0;
          this._downloadSpeed = 0;
          this._downloadRemainTimeInSecond = -1;
        }

        /**
         * 重置解压进度信息
         */
        _resetExtractInfo() {
          this._zipExtractTotalBytes = 0;
          this._zipExtractedBytes = 0;
        }

        /**
         * 如果存在 Zip 解压任务，则自动取消解压后，再释放资源
         */
        _releaseZipTask() {
          if (ggZip.isAvailable) {
            if (this._zipTaskId) {
              ggZip.release(this._zipTaskId);
              this._zipTaskId = null;
            }
          }
        }

        /**
         * 更新状态
         */
        _updateState(state) {
          this._state = state;
          this.observers.forEach(observer => {
            observer.onGGHotUpdateInstanceCallBack == null || observer.onGGHotUpdateInstanceCallBack(this);
          });
        }

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 下载监听

        _onDownloadProgress(task, bytesReceived, totalBytesReceived, totalBytesExpected) {
          // 实例已经销毁，结束
          if (this._destroyed) {
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 version.manifest 的下载进度

          if (task.requestURL == this._versionManifestRemoteUrl) {
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 project.manifest 的下载进度

          if (task.requestURL == this._projectManifestRemoteUrl) {
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理热更新的差异文件的下载进度

          // 更新下载进度
          this._downloadedBytes += bytesReceived;
          let curTime = Date.now();

          // 计算下载速度（间隔一段时间在计算，避免短时间内多次计算，值波动范围过大，导致数据失真，失去参考意义）
          if (curTime - this._lastSpeedUpdateTimeInMs >= this._option.downloadSpeedCalculationIntervalInMs) {
            if (this._lastSpeedUpdateTimeInMs == 0) {
              // 首次下载进度回调，是没有上次下载进度记录的，所以此时下载速度和剩余时间重置
              this._downloadSpeed = 0;
              this._downloadRemainTimeInSecond = -1;
            } else {
              // 二次或后续下载进度回调时，存在上次下载进度记录，所以可以比较计算此时下载速度和剩余时间
              this._downloadSpeed = (this._downloadedBytes - this._lastDownloadedBytes) / ((curTime - this._lastSpeedUpdateTimeInMs) / 1000);
              this._downloadRemainTimeInSecond = Math.round((this._totalBytes - this._downloadedBytes) / this._downloadSpeed);
            }
            this._lastDownloadedBytes = this._downloadedBytes;
            this._lastSpeedUpdateTimeInMs = curTime;
          }

          // 外部下载进度回调（间隔一段时间之后在回调）
          if (curTime - this._lastCallBackUpdateTimeInMs >= this._option.downloadProgressCallBackIntervalInMs) {
            this._lastCallBackUpdateTimeInMs = curTime;
            {
              let info = "热更新：下载中";
              info += ` 总字节数：${this._totalBytes}`;
              info += ` 已下载字节数: ${this._downloadedBytes}`;
              info += ` 总下载文件数：${this._totalFiles}`;
              info += ` 下载成功文件数：${this.downloadSucFiles.length}`;
              info += ` 下载失败文件数：${this.downloadFailedFiles.length}`;
              info += ` 当前并行下载任务数：${this._curConcurrentTaskCount}`;
              info += ` 当前下载速度：${(this._downloadSpeed / 1024 / 1024).toFixed(2)} MB/s`;
              info += ` 当前剩余时间：${this._downloadRemainTimeInSecond}s`;
              this._debug(info);
            }
            this._updateState(GGHotUpdateInstanceState.HotUpdateDownloading);
          }
        }
        _onDownloadError(task, errorCode, errorCodeInternal, errorStr) {
          // 实例已经销毁，结束
          if (this._destroyed) {
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 version.manifest 的下载失败

          if (task.requestURL == this._versionManifestRemoteUrl) {
            {
              this._error(`检查更新：下载远程 version.manifest 失败。错误代码：${errorCode} 内部错误代码：${errorCodeInternal} 错误信息：${errorStr}`);
              this._error(`检查更新：失败`);
            }
            this._updateState(GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError);
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 project.manifest 的下载失败

          if (task.requestURL == this._projectManifestRemoteUrl) {
            {
              this._error(`检查更新：下载远程 project.manifest 失败。错误代码：${errorCode} 内部错误代码：${errorCodeInternal} 错误信息：${errorStr}`);
              this._error(`检查更新：失败`);
            }
            this._updateState(GGHotUpdateInstanceState.CheckUpdateFailedDownloadRemoteProjectManifestError);
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理热更新的差异文件的下载失败

          // 收集下载失败任务
          this.downloadFailedFiles.push(task);

          // 更新下载进度
          {
            this._debug(`热更新：文件下载失败：${task.requestURL} 下载失败。错误代码：${errorCode} 内部错误代码：${errorCodeInternal} 错误信息：${errorStr} 当前累计下载失败文件数量：${this.downloadFailedFiles.length}`);
          }
          this._updateState(GGHotUpdateInstanceState.HotUpdateDownloading);

          // 处理结果
          this._handleHotUpdateSingleDownloadTaskDone();
        }
        _onDownloadSuccess(task) {
          // 实例已经销毁，结束
          if (this._destroyed) {
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 version.manifest 的下载成功

          if (task.requestURL == this._versionManifestRemoteUrl) {
            var _this$_localProjectMa, _this$_remoteVersionM;
            this._debug(`检查更新：下载远程 version.manifest 成功`);

            // 解析下载好的远程 version.manifest
            this._remoteVersionManifest = null;
            try {
              if (native.fileUtils.isFileExist(this._versionManifestDownloadPath)) {
                this._remoteVersionManifest = JSON.parse(native.fileUtils.getStringFromFile(this._versionManifestDownloadPath));

                // 如果下载好的远程 version.manifest 已经解析完毕了，那这个文件就没用了，删除它
                native.fileUtils.removeFile(this._versionManifestDownloadPath);
              }
            } catch (error) {
              {
                this._error(error);
              }
            }
            if (this._remoteVersionManifest == null) {
              {
                this._error(`检查更新：解析远程 version.manifest 失败`);
                this._error(`检查更新：失败`);
              }
              this._updateState(GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError);
              return;
            }

            // 从搜索目录下的 project.manifest 中获取版本
            const localVersion = ((_this$_localProjectMa = this._localProjectManifest) == null ? void 0 : _this$_localProjectMa.version) ?? "";
            const remoteVersion = ((_this$_remoteVersionM = this._remoteVersionManifest) == null ? void 0 : _this$_remoteVersionM.version) ?? "";
            {
              this._debug(`检查更新：解析远程 version.manifest 成功。版本信息: ${JSON.stringify(this._remoteVersionManifest)}`);
              this._debug(`检查更新：当前本地版本: ${localVersion}`);
              this._debug(`检查更新：当前远端版本: ${remoteVersion}`);
            }

            // 本地版本和远程版本比较
            const isNewVersionFound = remoteVersion != localVersion;

            // 未发现新版本
            if (!isNewVersionFound) {
              this._debug(`检查更新：成功，当前已经是最新版本`);
              // 释放文件json内存
              this._localProjectManifest = null;
              this._updateState(GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate);
              return;
            }

            // 发现新版本
            switch (this._hotUpdateType) {
              case GGHotUpdateType.Full:
                {
                  // TODO 完善逻辑

                  // 计算下载信息
                  this._reCalculateDownloadInfo();
                  this._debug(`检查更新：成功，发现新版本`);

                  // 返回新版本
                  this._updateState(GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound);
                  return;
                }
              case GGHotUpdateType.Incremental:
                {
                  try {
                    if (native.fileUtils.isFileExist(this._projectManifestDownloadPath)) {
                      this._reCalculateDownloadInfo();
                      // 如果还有文件未下载，那么返回新版本
                      if (this._totalFiles != this.downloadSucFiles.length) {
                        this._updateState(GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound);
                        return;
                      }
                    }
                  } catch (error) {
                    {
                      this._error(error);
                      this._error(`检查更新：解析本地已存在的远程 project.manifest 失败。地址： ${this._projectManifestDownloadPath}`);
                    }
                  }

                  // 到这里表示本地没有 project.manifest 文件，或者解析出错，总之不对劲了，此时删除这个文件，重新走一躺下载处理
                  if (native.fileUtils.isFileExist(this._projectManifestDownloadPath)) {
                    native.fileUtils.removeFile(this._projectManifestDownloadPath);
                  }
                  this._debug(`检查更新：下载远程 project.manifest 开始，下载地址：${this._projectManifestRemoteUrl} 本地存储地址：${this._projectManifestDownloadPath}`);
                  this._createParentDirs(this._projectManifestDownloadPath);
                  this._downloader.createDownloadTask(this._projectManifestRemoteUrl, this._projectManifestDownloadPath);
                  return;
                }
              default:
                throw new Error(`不支持的热更新方式: ${this._hotUpdateType}`);
            }
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理检查更新的 project.manifest 的下载成功

          if (task.requestURL == this._projectManifestRemoteUrl) {
            this._debug(`检查更新：下载远程 project.manifest 成功`);

            // 解析已经下载下来的 project.manifest
            try {
              if (native.fileUtils.isFileExist(task.storagePath)) {
                this._remoteProjectManifest = JSON.parse(native.fileUtils.getStringFromFile(task.storagePath));
              }
            } catch (error) {
              this._error(error);
            }
            if (this._remoteProjectManifest == null) {
              this._error(`检查更新：解析远程 project.manifest 失败。下载地址： ${task.requestURL} 本地存储地址：${task.storagePath}`);
              this._error(`检查更新：失败`);
              this._updateState(GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError);
              return;
            }

            // 对比本地最新 project.manifest 和远程 project.manifest，将需要下载的文件标记一下，并保存到本地（以方便后面断点续传）
            let hasDiff = false;
            Object.keys(this._remoteProjectManifest.assets).forEach(assetPath => {
              const remoteAssetInfo = this._remoteProjectManifest.assets[assetPath];
              const localAssetInfo = this._localProjectManifest.assets[assetPath] ?? null;
              const assetNeed2Update = localAssetInfo == null || remoteAssetInfo.size != localAssetInfo.size || remoteAssetInfo.md5 != localAssetInfo.md5;
              if (assetNeed2Update) {
                // 标记此文件需要下载
                remoteAssetInfo.state = ProjectManifestAssetUpdateState.Idle;
                hasDiff = true;
              }
            });
            if (hasDiff) {
              // 如果比较后，存在差异文件需要下载，那么
              this._debug(`检查更新：成功，发现新版本`);

              // 1. 将有待下载文件的信息写回到本地，方便后面恢复下载
              native.fileUtils.writeStringToFile(JSON.stringify(this._remoteProjectManifest), task.storagePath);

              // 2. 重新计算下载信息
              this._reCalculateDownloadInfo();

              // 3. 返回新版本
              this._updateState(GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound);
            } else {
              // 如果比较后，没有差异文件需要下载，那么返回已经更新到最新
              this._debug(`检查更新：成功，发现不同远端版本，但和当前本地版本没有文件差异，因此当前已经是最新版本`);

              // 释放文件json内存
              this._localProjectManifest = null;
              this._updateState(GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate);
            }
            return;
          }

          // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 处理热更新的差异文件的下载成功

          // 收集下载成功任务
          this.downloadSucFiles.push(task);

          // 更新下载进度
          this._updateState(GGHotUpdateInstanceState.HotUpdateDownloading);

          // 如果热更新方式是增量更新，那么需要标记下载成功的文件，并持久化到本地，方便下次断点续传（如果有），跳过已经下载成功的文件
          if (this._hotUpdateType == GGHotUpdateType.Incremental) {
            var _this$_remoteProjectM;
            const assetInfo = ((_this$_remoteProjectM = this._remoteProjectManifest) == null || (_this$_remoteProjectM = _this$_remoteProjectM.assets) == null ? void 0 : _this$_remoteProjectM[task.identifier]) ?? null;
            if (assetInfo) {
              assetInfo.state = ProjectManifestAssetUpdateState.Suc;
              native.fileUtils.writeStringToFile(JSON.stringify(this._remoteProjectManifest), this._projectManifestDownloadPath);
            } else {
              this._warn(`id: ${task.identifier}, url: ${task.requestURL}, path:${task.storagePath}, 任务下载成功，但视乎没法找到其原始瞄点，跳过记录下载成功到本地文件的处理`);
            }
          }

          // 处理结果
          this._handleHotUpdateSingleDownloadTaskDone();
        }

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 解压任务状态监听

        _onExtractUpdated(task) {
          // 实例已经销毁，结束
          if (this._destroyed) {
            return;
          }
          // 不是自己的任务，结束
          if (task.id != this._zipTaskId) {
            return;
          }

          // 处理解压任务状态
          switch (task.status) {
            case GGZipExtractZipStatus.Idle:
            case GGZipExtractZipStatus.Start:
            case GGZipExtractZipStatus.Extracting:
              {
                this._zipExtractTotalBytes = task.total_bytes ?? 0;
                this._zipExtractedBytes = task.extracted_Bytes ?? 0;
                this._debug(`热更新：解压中 Zip总解压字节数: ${this._zipExtractTotalBytes} Zip已解压字节数: ${this._zipExtractedBytes}`);
                this._updateState(GGHotUpdateInstanceState.HotUpdateExtracting);
                break;
              }
            case GGZipExtractZipStatus.Suc:
              {
                this._zipExtractTotalBytes = task.total_bytes ?? 0;
                this._zipExtractedBytes = task.extracted_Bytes ?? 0;
                this._debug(`热更新：解压成功 Zip总解压字节数: ${this._zipExtractTotalBytes} Zip已解压字节数: ${this._zipExtractedBytes}`);
                this._releaseZipTask();
                this._updateSearchPath();
                this._debug(`热更新：成功`);
                this._updateState(GGHotUpdateInstanceState.HotUpdateSuc);
                break;
              }
            case GGZipExtractZipStatus.Cancelled:
              {
                this._debug(`热更新：解压取消`);
                this._releaseZipTask();
                this._updateState(GGHotUpdateInstanceState.HotUpdateFailed);
                break;
              }
            case GGZipExtractZipStatus.Error:
              {
                this._debug(`热更新：解压失败 错误信息: ${task.err_msg}`);
                this._releaseZipTask();
                this._updateState(GGHotUpdateInstanceState.HotUpdateFailed);
                break;
              }
          }
        }

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /**
         * 销毁实例
         *
         * 1. 实例销毁之后，没法再次使用
         * 2. 实例销毁的一般应用场合为，主包已经完成了热更新，在重启游戏之前，进行销毁
         */
        destroy() {
          // 标记实例已经被销毁
          this._destroyed = true;

          // 移除所有外部观察者
          this.unregisterAll();

          // 重置属性
          this._localProjectManifest = null;
          this._remoteProjectManifest = null;
          this._remoteVersionManifest = null;

          // 重置状态信息
          this._state = GGHotUpdateInstanceState.Idle;
          this._hotUpdateType = null;

          // 放弃进行中的下载任务
          if (this._downloadTasks.length > 0) {
            this._downloadTasks.forEach(task => {
              this._downloader.abort(task);
            });
          }

          // 重置下载信息
          this._resetDownloadInfo();
          if (ggZip.isAvailable) {
            // 重置解压进度信息
            this._resetExtractInfo();
            // 移除解压缩状态监听
            ggZip.offTarget(this);
            // 取消可能正在解压缩的任务并释放资源
            this._releaseZipTask();
          }
        }

        /**
         * 清除下载缓存
         *
         * 1. 清除下载缓存后，后续的检查更新、热更新都会重新下载所有文件
         * 2. 在多次检查更新失败或者多次热更新失败后，可以考虑调用此方法，清除所有下载缓存文件
         */
        clearDownloadCache() {
          this._debug(`清除热更包(${this.name})的本地缓存: 开始`);

          // 部分状态下不可以删除下载缓存
          if ([GGHotUpdateInstanceState.CheckUpdateInProgress, GGHotUpdateInstanceState.HotUpdateDownloading, GGHotUpdateInstanceState.HotUpdateExtracting].includes(this._state)) {
            this._debug(`清除热更包(${this.name})的本地缓存: 失败. 当前状态不可以进行此操作: ${this._state}`);
            return;
          }

          // 收集需要清除的缓存文件/目录
          const cacheFiles = [{
            path: this._downloadRootDirPath,
            isFile: false
          }, {
            path: this._zipDownloadPath,
            isFile: true
          }, {
            path: this._zipDownloadPath + ".tmp",
            isFile: true
          }];

          // 清除所有缓存
          cacheFiles.forEach(cacheFile => {
            if (cacheFile.isFile) {
              if (native.fileUtils.isFileExist(cacheFile.path)) {
                const suc = native.fileUtils.removeFile(cacheFile.path);
                this._debug(`本地缓存文件(${cacheFile.path})：存在，${suc ? "删除成功" : "删除失败"}`);
              } else {
                this._debug(`本地缓存文件(${cacheFile.path})：不存在，不用删除`);
              }
            } else {
              if (native.fileUtils.isDirectoryExist(cacheFile.path)) {
                const suc = native.fileUtils.removeDirectory(cacheFile.path);
                this._debug(`本地缓存目录(${cacheFile.path})：存在，${suc ? "删除成功" : "删除失败"}`);
              } else {
                this._debug(`本地缓存目录(${cacheFile.path})：不存在，不用删除`);
              }
            }
          });
          this._debug(`清除热更包(${this.name})的本地缓存: 结束`);
        }
        /**
         * 检查更新
         *
         * @param hotUpdateType 热更新方式
         *
         * | 决策条件 | 决策结果 |
         * | :--- | ---: |
         * | 原生平台支持zip解压 + 未传入参数 + 本地有历史版本 | 增量更新 |
         * | 原生平台支持zip解压 + 未传入参数 + 本地无历史版本 | 全量更新 |
         * | 原生平台支持zip解压 + 传入参数 | 使用传入的热更新方式 |
         * | 原生平台不支持zip解压 | 增量更新 |
         */
        checkUpdate(hotUpdateType) {
          if (this._state == GGHotUpdateInstanceState.CheckUpdateInProgress) {
            this._warn("检查更新：当前已经在检查新版本中。请不要重复调用 `checkUpdate`.");
            return;
          }
          if (this._state == GGHotUpdateInstanceState.HotUpdateDownloading) {
            this._warn("检查更新：当前已经在热更新中。请不要在此时调用 `checkUpdate`.");
            return;
          }
          if (this._state == GGHotUpdateInstanceState.HotUpdateExtracting) {
            this._warn("检查更新：当前正在解压 zip 中。请不要在此时调用 `checkUpdate`.");
            return;
          }

          // 更新状态
          this._debug(`检查更新：开始`);
          this._resetDownloadInfo();
          this._updateState(GGHotUpdateInstanceState.CheckUpdateInProgress);

          // 按照搜索路径顺序，读取「此包」「本地最新版本」的 project.manifest 文件内容到内存中
          {
            this._debug(`检查更新：解析本地 project.manifest 开始`);
            this._debug(`检查更新：本地 project.manifest 文件搜索路径如下：${JSON.stringify(this._projectManifestSearchPaths)}`);
          }
          this._localProjectManifest = null;
          for (const localProjectManifestPath of this._projectManifestSearchPaths) {
            this._debug(`检查更新：尝试从路径 ${localProjectManifestPath} 获取 project.manifest 信息：开始`);
            if (!native.fileUtils.isFileExist(localProjectManifestPath)) {
              this._debug(`检查更新：尝试从路径 ${localProjectManifestPath} 获取 project.manifest 信息：失败，文件不存在`);
              continue;
            }
            const localProjectManifestText = native.fileUtils.getStringFromFile(localProjectManifestPath);
            if (localProjectManifestText) {
              try {
                this._localProjectManifest = JSON.parse(localProjectManifestText);
                DEBUG && this._debug(`检查更新：尝试从路径 ${localProjectManifestPath} 获取 project.manifest 信息：成功`);
              } catch (error) {
                {
                  this._error(`检查更新：尝试从路径 ${localProjectManifestPath} 获取 project.manifest 信息：失败，文件内容解析失败`);
                  this._error(error);
                  this._error(`检查更新：失败，解析本地 project.manifest 失败`);
                }
                this._updateState(GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError);
                return;
              }
            }
            if (this._localProjectManifest) {
              break;
            }
          }
          // 如果没有读取本地到 project.manifest 配置，那么可能是包的首次更新，此时生成一个默认空白配置，那么就会全量将包下载下来
          if (!this._localProjectManifest) {
            this._debug(`检查更新：没法解析到本地 project.manifest 配置，将初始化一个空的 project.manifeset 配置`);
            this._localProjectManifest = {
              version: "",
              assets: {}
            };
          }
          this._debug(`检查更新：解析本地 project.manifest 成功`);

          // 检查更新前，先删除本地可能存在的 version.manifest
          if (native.fileUtils.isFileExist(this._versionManifestDownloadPath)) {
            native.fileUtils.removeFile(this._versionManifestDownloadPath);
          }

          // 决定热更新方式
          if (!ggZip.isAvailable) {
            this._hotUpdateType = GGHotUpdateType.Incremental;
          } else {
            if (hotUpdateType) {
              this._hotUpdateType = hotUpdateType;
            } else {
              this._hotUpdateType = this._localProjectManifest.version == "" ? GGHotUpdateType.Full : GGHotUpdateType.Incremental;
            }
          }
          this._debug(`检查更新：本次更新方式： ${this._hotUpdateType}`);

          // 通过 fetch 请求远程 version.manifest 的内容，在部分引擎版本下可能存在异常（fetch 这个 api 在原生平台上的实现上存在差异）
          // 因此，改用 downloader 去下载 version.manifest 并解析，完全替代 fetch
          this._debug(`检查更新：下载远程 version.manifest 开始。地址: ${this._versionManifestRemoteUrl}`);
          this._createParentDirs(this._versionManifestDownloadPath);
          this._downloader.createDownloadTask(this._versionManifestRemoteUrl, this._versionManifestDownloadPath);
        }

        /**
         * 重新计算热更新需要下载的信息
         */
        _reCalculateDownloadInfo() {
          // 重置所有下载信息
          this._resetDownloadInfo();
          switch (this._hotUpdateType) {
            case GGHotUpdateType.Full:
              {
                // 恢复下载任务
                const downloadTask = {
                  identifier: this._zipDownloadPath,
                  requestURL: this._zipRemoteUrl,
                  storagePath: this._zipDownloadPath
                };

                // zip 文件只会下载一个
                this._totalFiles = 1;
                if (native.fileUtils.isFileExist(this._zipDownloadPath)) {
                  // 如果 zip 已经下载完毕
                  this._totalBytes = native.fileUtils.getFileSize(this._zipDownloadPath);
                  this._downloadedBytes = this._totalBytes;

                  // 下载成功的任务加入到成功列表
                  this.downloadSucFiles.push(downloadTask);
                } else {
                  var _this$_remoteVersionM2;
                  // 如果 zip 还没有下载完毕

                  // 从远端 version.manifest 中获取 zip 文件的总大小
                  this._totalBytes = ((_this$_remoteVersionM2 = this._remoteVersionManifest) == null ? void 0 : _this$_remoteVersionM2.zip_file_bytes) ?? 0;

                  // 重置 zip 累计下载字节数为0
                  this._downloadedBytes = 0;

                  // 如果 zip 之前已经有下载过，但未完成，此时获取缓存文件的大小，作为更新累计下载字节数
                  const downloadTempFilePath = this._zipDownloadPath + ".tmp";
                  if (native.fileUtils.isFileExist(downloadTempFilePath)) {
                    let downloadFileSize = native.fileUtils.getFileSize(downloadTempFilePath);
                    if (downloadFileSize > 0) {
                      this._downloadedBytes += downloadFileSize;
                    }
                  }

                  // 未下载或下载失败的任务加入到失败列表
                  this.downloadFailedFiles.push(downloadTask);
                }
                break;
              }
            case GGHotUpdateType.Incremental:
              {
                // 读取本地已经下载好的远程 project.manifest
                try {
                  if (native.fileUtils.isFileExist(this._projectManifestDownloadPath)) {
                    this._remoteProjectManifest = JSON.parse(native.fileUtils.getStringFromFile(this._projectManifestDownloadPath));
                  }
                } catch (error) {
                  {
                    this._error(error);
                  }
                }
                if (!this._remoteProjectManifest) {
                  {
                    this._error(`解析本地已存在的远程 project.manifest 失败。地址： ${this._projectManifestDownloadPath}`);
                  }
                  break;
                }

                // 计算下载信息
                Object.keys(this._remoteProjectManifest.assets).forEach(assetPath => {
                  const remoteAssetInfo = this._remoteProjectManifest.assets[assetPath];
                  const localAssetInfo = this._localProjectManifest.assets[assetPath] ?? null;
                  const need2Update = localAssetInfo == null || remoteAssetInfo.size != localAssetInfo.size || remoteAssetInfo.md5 != localAssetInfo.md5;
                  if (need2Update && remoteAssetInfo.state != null) {
                    // 更新需要下载的文件信息
                    this._totalFiles++;
                    this._totalBytes += remoteAssetInfo.size;

                    // 恢复下载任务
                    const downloadTask = {
                      identifier: assetPath,
                      requestURL: `${this._remoteRootUrl}/${assetPath}`,
                      storagePath: path.join(this._downloadRootDirPath, assetPath)
                    };
                    if (remoteAssetInfo.state == ProjectManifestAssetUpdateState.Suc) {
                      // 更新累计下载字节数
                      this._downloadedBytes += remoteAssetInfo.size;
                      // 下载成功的任务加入到成功列表
                      this.downloadSucFiles.push(downloadTask);
                    } else {
                      // 更新累计下载字节数
                      // 如果之前已经有相当一部分文件未下载完成，那么这里的读取可能会比较耗时
                      const downloadTempFilePath = downloadTask.storagePath + ".tmp";
                      if (native.fileUtils.isFileExist(downloadTempFilePath)) {
                        let downloadFileSize = native.fileUtils.getFileSize(downloadTempFilePath);
                        if (downloadFileSize > 0) {
                          this._downloadedBytes += downloadFileSize;
                        }
                      }
                      // 未下载或下载失败的任务加入到失败列表
                      this.downloadFailedFiles.push(downloadTask);
                    }
                  }
                });
                break;
              }
            default:
              {
                throw new Error(`不支持的热更新方式: ${this._hotUpdateType}`);
              }
          }
          {
            let info = `待下载信息：`;
            info += `总字节数：${this._totalBytes} `;
            info += `已下载字节数：${this._downloadedBytes} `;
            info += `总下载文件数：${this._totalFiles} `;
            info += `下载成功文件数：${this.downloadSucFiles.length} `;
            info += `未下载或下载失败文件数：${this.downloadFailedFiles.length}`;
            this._debug(info);
          }
        }

        /**
         * 开始热更新
         */
        hotUpdate() {
          if (this._state == GGHotUpdateInstanceState.CheckUpdateInProgress) {
            this._warn("热更新：当前正在检查新版本中。请在发现新版本之后再调用 `hotUpdate`.");
            return;
          }
          if (this._state == GGHotUpdateInstanceState.HotUpdateDownloading) {
            this._warn("热更新：当前已经在热更新中。请不要重复调用 `hotUpdate`.");
            return;
          }
          if (this._state == GGHotUpdateInstanceState.HotUpdateExtracting) {
            this._warn("热更新：当前正在解压zip中。请不要重复调用 `hotUpdate`.");
            return;
          }
          this._debug(`热更新：开始`);
          this._updateState(GGHotUpdateInstanceState.HotUpdateDownloading);

          // 开始下载之前，重新计算下载信息
          this._reCalculateDownloadInfo();

          // 如果之前已经下载过，但存在下载未完成或者下载失败的文件，那么我们将失败的任务再次加入下载任务队列
          if (this.downloadFailedFiles.length > 0) {
            this._debug(`热更新：发现 ${this.downloadFailedFiles.length} 个未下载或下载失败任务，将重新加入队列进行下载`);
            this._downloadTasks.push(...this.downloadFailedFiles);
            this.downloadFailedFiles.length = 0;
          }

          // 如果已经没有后续下载任务并且进行中的任务都已经结束了，那么检查热更新下载结果
          if (this._downloadTasks.length == 0 && this._curConcurrentTaskCount == 0) {
            this._handleHotUpdateAllDownloadTasksDone();
            return;
          }
          this._debug(`热更新：当前共计 ${this._downloadTasks.length} 个下载任务`);

          // 启动下载
          this._lastDownloadedBytes = 0;
          this._lastSpeedUpdateTimeInMs = 0;
          this._lastCallBackUpdateTimeInMs = Date.now();
          this._nextDownload();
        }

        /**
         * 启动下一个下载任务
         */
        _nextDownload() {
          while (this._downloadTasks.length > 0 && this._curConcurrentTaskCount < this._option.downloadMaxConcurrentTask) {
            this._curConcurrentTaskCount++;
            const task = this._downloadTasks.shift();
            this._createParentDirs(task.storagePath);
            this._downloader.createDownloadTask(task.requestURL, task.storagePath, task.identifier);
          }
        }

        /**
         * 处理热更新过程中，每个下载任务执行结束（不管下载成功还是失败）后的逻辑
         */
        _handleHotUpdateSingleDownloadTaskDone() {
          //  不管下载成功还是失败，并行任务数 -1;
          this._curConcurrentTaskCount--;

          // 如果还有后续其他下载任务，那么开启下个下载
          if (this._downloadTasks.length > 0) {
            this._nextDownload();
            return;
          }

          // 如果已经没有后续下载任务并且进行中的任务都已经结束了，那么检查热更新下载结果
          if (this._downloadTasks.length == 0 && this._curConcurrentTaskCount == 0) {
            this._handleHotUpdateAllDownloadTasksDone();
          }
        }

        /**
         * 处理热更新过程中，所有下载任务都执行结束（不管下载成功还是失败）后的逻辑
         */
        _handleHotUpdateAllDownloadTasksDone() {
          this._downloadSpeed = 0;
          this._downloadRemainTimeInSecond = -1;
          const suc = this._totalFiles == this.downloadSucFiles.length;
          {
            let info = suc ? "热更新：下载成功" : "热更新：下载失败";
            info += ` 总字节数：${this._totalBytes}`;
            info += ` 已下载字节数: ${this._downloadedBytes}`;
            info += ` 总下载文件数：${this._totalFiles}`;
            info += ` 下载成功文件数：${this.downloadSucFiles.length}`;
            info += ` 下载失败文件数：${this.downloadFailedFiles.length}`;
            info += ` 当前并行下载任务数：${this._curConcurrentTaskCount}`;
            info += ` 当前下载速度：${(this._downloadSpeed / 1024 / 1024).toFixed(2)} MB/s`;
            info += ` 当前剩余时间：${this._downloadRemainTimeInSecond}s`;
            suc ? this._debug(info) : this._error(info);
          }

          // 热更新下载失败，则回调失败状态
          if (!suc) {
            this._updateState(GGHotUpdateInstanceState.HotUpdateFailed);
            return;
          }

          // 热更新下载成功，则需要根据类型进行处理
          // * 如果是全量更新，那么需要对 zip 包进行解压
          // * 如果是增量更新，那么直接更新搜索路径即可
          switch (this._hotUpdateType) {
            case GGHotUpdateType.Full:
              {
                var _this$_remoteVersionM3;
                // 更新状态
                this._resetExtractInfo();
                this._debug(`热更新：解压中`);
                this._updateState(GGHotUpdateInstanceState.HotUpdateExtracting);

                // 如果当前存在解压任务，那么释放它
                this._releaseZipTask();

                // 创建一个新的解压缩任务
                this._zipTaskId = ggZip.createExtractTask({
                  zip_file_abs_path: this._zipDownloadPath,
                  zip_dest_dir_abs_path: this._downloadRootDirPath,
                  zip_uncompressed_bytes: ((_this$_remoteVersionM3 = this._remoteVersionManifest) == null ? void 0 : _this$_remoteVersionM3.zip_uncompressed_bytes) ?? 0,
                  remove_zip_dest_dir_before_extract: true,
                  delete_zip_after_extract: true
                });
                break;
              }
            case GGHotUpdateType.Incremental:
              {
                this._updateSearchPath();
                this._debug(`热更新：成功`);
                this._updateState(GGHotUpdateInstanceState.HotUpdateSuc);
                break;
              }
            default:
              {
                throw new Error(`不支持的热更新方式: ${this._hotUpdateType}`);
              }
          }
        }

        /**
         * 更新搜索地址
         *
         * * 主包：更新搜索路径之后，还需要重启游戏才可以生效
         * * 子包：更新搜索路径之后，不用重启游戏就生效（但是要注意此前还没有加载过子包）
         */
        _updateSearchPath() {
          // e.g. ["@assets/data/","@assets/Resources/","@assets/"]
          const searchPaths = native.fileUtils.getSearchPaths();

          // 待插入的搜索路径（注意结尾要加 /)
          const newSearchPath = this._searchRootDirPath + "/";
          {
            this._debug(`当前搜索路径顺序：${JSON.stringify(searchPaths)}`);
            this._debug(`待插入的搜索路径：${newSearchPath}`);
          }

          // 插入新的搜索路径到当前搜索路径的最前面（如果当前搜索路径数组已经包含新的待插入搜索路径，那么只需要将其提到数组最前面即可）
          let isNewPathExist = false;
          for (let j = searchPaths.length - 1; j >= 0; --j) {
            if (searchPaths[j] == newSearchPath) {
              searchPaths.unshift(searchPaths.splice(j, 1)[0]);
              isNewPathExist = true;
              break;
            }
          }
          // 如果当前搜索路径数组不包含新的待插入搜索路径，那么将新的路径插入哦到最前面
          if (!isNewPathExist) {
            searchPaths.unshift(newSearchPath);
          }
          {
            this._debug(`最终搜索路径顺序：${JSON.stringify(searchPaths)}`);
          }

          // 重命名下载目录的 project.manifest.gg 为 project.manifest，以标记更新完毕，同时方便后续移动到搜索目录时，读取 project.manifest
          // e.g.
          // /data/user/0/package/files/gg-hot-update-temp/${bundleName}/${bundleName}.project.manifest.gg ->
          // /data/user/0/package/files/gg-hot-update-temp/${bundleName}/${bundleName}.project.manifest
          const srcFilePath = this._projectManifestDownloadPath;
          const dstFilePath = srcFilePath.substring(0, srcFilePath.lastIndexOf(".gg"));
          if (native.fileUtils.isFileExist(dstFilePath)) {
            native.fileUtils.removeFile(dstFilePath);
          }
          this._createParentDirs(dstFilePath);
          const renameSuc = native.fileUtils.renameFile(srcFilePath, dstFilePath);
          {
            this._debug(`重命名下载目录的 project.manifest.gg 为 project.manifest：${renameSuc ? "成功" : "失败"}。 ${srcFilePath} -> ${dstFilePath}`);
          }
          const downloadDirPath = this._downloadRootDirPath + "/";
          if (this.name == GGHotUpdateInstanceEnum.BuildIn) ;else {
            // 如果是子包
            {
              this._debug(`将移动下载目录 ${this._downloadRootDirPath} 的资源到搜索目录 ${this._searchRootDirPath}`);
            }

            // 更新搜索路径
            native.fileUtils.setSearchPaths(searchPaths);

            // 移动下载目录的内容到搜索路径下
            const downloadDirPathLength = downloadDirPath.length;
            if (native.fileUtils.isDirectoryExist(downloadDirPath)) {
              const fileList = [];
              native.fileUtils.listFilesRecursively(downloadDirPath, fileList);
              fileList.forEach(srcPath => {
                let relativePath = srcPath.substring(downloadDirPathLength);
                let dstPath = newSearchPath + relativePath;
                if (dstPath[dstPath.length - 1] == "/") {
                  native.fileUtils.createDirectory(dstPath);
                } else {
                  this._createParentDirs(dstPath);
                  if (native.fileUtils.isFileExist(dstPath)) {
                    native.fileUtils.removeFile(dstPath);
                  }
                  native.fileUtils.renameFile(srcPath, dstPath);
                }
              });
            }
            if (native.fileUtils.isDirectoryExist(downloadDirPath)) {
              native.fileUtils.removeDirectory(downloadDirPath);
            }
          }

          // 缓存新的搜索路径数组，以便下次重启的时候，更新新的搜索路径
          localStorage.setItem("GGHotUpdateSearchPaths", JSON.stringify(searchPaths));
          this._debug(`保存最新搜索路径到 LocalStorage 中，方便下次重启游戏时更新搜索路径`);
        }
        _debug(...args) {
          ggLogger.debug(this.name, ...args);
        }
        _warn(...args) {
          ggLogger.warn(this.name, ...args);
        }
        _error(...args) {
          ggLogger.error(this.name, ...args);
        }
      }
      exports('GGHotUpdateInstance', GGHotUpdateInstance);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GGHotUpdateManager.ts", ['cc', './GGHotUpdateInstance.ts', './GGLogger.ts'], function (exports) {
  var cclegacy, path, native, game, GGHotUpdateInstance, ggLogger;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      path = module.path;
      native = module.native;
      game = module.game;
    }, function (module) {
      GGHotUpdateInstance = module.GGHotUpdateInstance;
    }, function (module) {
      ggLogger = module.ggLogger;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e064fnKBBlAvrZaZmKJBKhV", "GGHotUpdateManager", undefined);

      /**
       * 热更新实例管理器
       *
       * @author caizhitao
       * @created 2024-08-30 10:40:53
       */
      class GGHotUpdateManager {
        constructor() {
          /**
           * 热更新实例
           */
          this._instanceMap = null;
          this._enableLog = false;
          this._remoteRootUrl = "";
          this._localRootDirPath = "";
        }
        /**
         * 是否打印调试日志
         */
        get enableLog() {
          return this._enableLog;
        }
        /**
         * 热更新文件的远程地址根目录
         *
         * e.g. http://192.168.0.1:8080/1.0.0
         */
        get remoteRootUrl() {
          return this._remoteRootUrl;
        }
        /**
         * 热更新文件的本地存储根目录
         *
         * e.g. Android: ``/data/user/0/com.cocos.game/files/gg-hot-update``
         */
        get localRootDirPath() {
          return this._localRootDirPath;
        }
        /**
         * 销毁并释放所有热更新实例
         */
        _destroyAllInstances() {
          ggLogger.debug(`销毁所有热更新实例`);
          if (this._instanceMap != null) {
            this._instanceMap.forEach(instance => {
              instance.destroy();
            });
            this._instanceMap.clear();
            this._instanceMap = null;
          }
        }

        /**
         * 初始化热更新管理器配置
         *
         * @param config 配置
         */
        init(config) {
          this._enableLog = config.enableLog ?? false;
          this._remoteRootUrl = config.packageUrl;
          this._localRootDirPath = config.storageDirPath ?? path.join(native.fileUtils.getWritablePath(), "gg-hot-update");

          // 初始化日志输出
          ggLogger.enable = this._enableLog;
          ggLogger.debug(`初始化完毕`);
        }

        /**
         * 获取热更新实例
         *
         * @param bundleName 内置的热更新实例类型 或 子包Bundle名字
         * @param option 热更新实例配置
         */
        getInstance(bundleName, option) {
          if (!this._instanceMap) {
            this._instanceMap = new Map();
          }
          let instance = this._instanceMap.get(bundleName);
          if (!instance) {
            instance = new GGHotUpdateInstance(bundleName, this._remoteRootUrl, this._localRootDirPath, option ? option : {
              downloadMaxConcurrentTask: 24,
              downloadProgressCallBackIntervalInMs: 16,
              downloadSpeedCalculationIntervalInMs: 1000
            });
            this._instanceMap.set(bundleName, instance);
          }
          return instance;
        }

        /**
         * 重启游戏
         */
        restartGame() {
          // 销毁所有热更新实例
          this._destroyAllInstances();

          // 重启游戏
          ggLogger.debug(`即将重启游戏`);
          game.restart();
        }

        /**
         * 清空所有热更包的数据，包括：
         *
         * * 更新搜索路径：移除所有热更包的搜索路径
         * * 删除插件用到的 LocalStorage 的值
         * * 删除所有热更包的本地下载目录
         * * 删除所有热更包的搜索路径目录
         *
         * 此API一般发生不兼容的升级后调用，然后重启游戏。比如
         *
         * * 在引擎升级后（比如从 3.8.4 升级到 3.8.5)，出现了不兼容的API，此时可能需要调用这个方法移除所有热更新信息，然后重启游戏
         * * 在客户端移除了一些原生方法，导致 ts 不能调用对应的方法，出现了不兼容的API，此时可能需要调用这个方法移除所有热更新信息，然后重启游戏
         * * ...
         *
         * @since 4.0.0
         */
        clear() {
          ggLogger.debug(`清空所有热更包的数据：开始`);

          // 销毁所有热更新实例
          this._destroyAllInstances();

          // 更新搜索路径：移除所有热更包的搜索路径
          // e.g. ["/data/user/0/com.cocos.game/files/gg-hot-update", "@assets/data/","@assets/Resources/","@assets/"] -> ["@assets/data/","@assets/Resources/","@assets/"]
          const searchPaths = native.fileUtils.getSearchPaths();
          const searchRootDirPath = this._localRootDirPath + "/";
          {
            ggLogger.debug(`移除前的搜索路径：${JSON.stringify(searchPaths)}`);
            ggLogger.debug(`待移除的搜索路径：${searchRootDirPath}`);
          }
          for (let i = searchPaths.length - 1; i >= 0; --i) {
            if (searchPaths[i] == searchRootDirPath) {
              searchPaths.splice(i, 1);
            }
          }
          ggLogger.debug(`移除后的搜索路径：${JSON.stringify(searchPaths)}`);

          // 删除插件用到的 LocalStorage 的值
          localStorage.removeItem("GGHotUpdateSearchPaths");

          // 删除所有热更包的本地下载目录
          const doanloadRootDirPath = path.join(this._localRootDirPath + "-temp");
          if (native.fileUtils.isDirectoryExist(doanloadRootDirPath)) {
            const suc = native.fileUtils.removeDirectory(doanloadRootDirPath);
            ggLogger.debug(`删除所有热更包的本地下载目录(${doanloadRootDirPath})：存在，${suc ? "已删除成功" : "删除失败"}`);
          } else {
            ggLogger.debug(`删除所有热更包的本地下载目录(${doanloadRootDirPath})：不存在，不用删除`);
          }

          // 删除所有热更包的搜索路径目录
          if (native.fileUtils.isDirectoryExist(searchRootDirPath)) {
            const suc = native.fileUtils.removeDirectory(searchRootDirPath);
            ggLogger.debug(`删除所有热更包的搜索路径目录(${searchRootDirPath})：存在，${suc ? "已删除成功" : "删除失败"}`);
          } else {
            ggLogger.debug(`删除所有热更包的搜索路径目录(${searchRootDirPath})：不存在，不用删除`);
          }
          ggLogger.debug(`清空所有热更包的数据：结束`);
        }
      }

      /**
       * 热更新实例管理器
       */
      const ggHotUpdateManager = exports('ggHotUpdateManager', new GGHotUpdateManager());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GGHotUpdateType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a47b9w6eWVLb4pE96HRigBC", "GGHotUpdateType", undefined);
      const GGHotUpdateName = exports('GGHotUpdateName', "gg-hot-update");
      const GGHotUpdateVersion = exports('GGHotUpdateVersion', "6.0.2");
      /**
       * 热更新实例类型
       */
      let GGHotUpdateInstanceEnum = exports('GGHotUpdateInstanceEnum', /*#__PURE__*/function (GGHotUpdateInstanceEnum) {
        GGHotUpdateInstanceEnum["BuildIn"] = "build-in";
        return GGHotUpdateInstanceEnum;
      }({}));

      /**
       * 热更新实例配置
       */

      /**
       * 热更新方式
       */
      let GGHotUpdateType = exports('GGHotUpdateType', /*#__PURE__*/function (GGHotUpdateType) {
        GGHotUpdateType["Full"] = "Full";
        GGHotUpdateType["Incremental"] = "Incremental";
        return GGHotUpdateType;
      }({}));

      /**
       * 热更新实例状态
       */
      let GGHotUpdateInstanceState = exports('GGHotUpdateInstanceState', /*#__PURE__*/function (GGHotUpdateInstanceState) {
        GGHotUpdateInstanceState["Idle"] = "Idle";
        GGHotUpdateInstanceState["CheckUpdateInProgress"] = "CheckUpdateInProgress";
        GGHotUpdateInstanceState["CheckUpdateFailedParseLocalProjectManifestError"] = "CheckUpdateFailedParseLocalProjectManifestError";
        GGHotUpdateInstanceState["CheckUpdateFailedParseRemoteVersionManifestError"] = "CheckUpdateFailedParseRemoteVersionManifestError";
        GGHotUpdateInstanceState["CheckUpdateFailedDownloadRemoteProjectManifestError"] = "CheckUpdateFailedDownloadRemoteProjectManifestError";
        GGHotUpdateInstanceState["CheckUpdateFailedParseRemoteProjectManifestError"] = "CheckUpdateFailedParseRemoteProjectManifestError";
        GGHotUpdateInstanceState["CheckUpdateSucNewVersionFound"] = "CheckUpdateSucNewVersionFound";
        GGHotUpdateInstanceState["CheckUpdateSucAlreadyUpToDate"] = "CheckUpdateSucAlreadyUpToDate";
        GGHotUpdateInstanceState["HotUpdateDownloading"] = "HotUpdateDownloading";
        GGHotUpdateInstanceState["HotUpdateExtracting"] = "HotUpdateExtracting";
        GGHotUpdateInstanceState["HotUpdateSuc"] = "HotUpdateSuc";
        GGHotUpdateInstanceState["HotUpdateFailed"] = "HotUpdateFailed";
        return GGHotUpdateInstanceState;
      }({}));
      let ProjectManifestAssetUpdateState = exports('ProjectManifestAssetUpdateState', /*#__PURE__*/function (ProjectManifestAssetUpdateState) {
        ProjectManifestAssetUpdateState[ProjectManifestAssetUpdateState["Idle"] = 0] = "Idle";
        ProjectManifestAssetUpdateState[ProjectManifestAssetUpdateState["Suc"] = 1] = "Suc";
        return ProjectManifestAssetUpdateState;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GGJsb.ts", ['cc', './GGLogger.ts', './GGObserverSystem.ts'], function (exports) {
  var cclegacy, sys, native, ggLogger, GGObserverSystem;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      native = module.native;
    }, function (module) {
      ggLogger = module.ggLogger;
    }, function (module) {
      GGObserverSystem = module.GGObserverSystem;
    }],
    execute: function () {
      cclegacy._RF.push({}, "10cc64DmwlCsoAVXsjwBGQu", "GGJsb", undefined);
      let GGJsbResponseCode = exports('GGJsbResponseCode', /*#__PURE__*/function (GGJsbResponseCode) {
        GGJsbResponseCode[GGJsbResponseCode["Suc"] = 1] = "Suc";
        GGJsbResponseCode[GGJsbResponseCode["InvalidPlatform"] = 100] = "InvalidPlatform";
        GGJsbResponseCode[GGJsbResponseCode["InvalidResp"] = 101] = "InvalidResp";
        GGJsbResponseCode[GGJsbResponseCode["InvalidModule"] = 102] = "InvalidModule";
        GGJsbResponseCode[GGJsbResponseCode["InvalidFunction"] = 103] = "InvalidFunction";
        GGJsbResponseCode[GGJsbResponseCode["InvalidParams"] = 104] = "InvalidParams";
        return GGJsbResponseCode;
      }({}));

      /**
       * GGJSB
       *
       * @author caizhitao
       * @created 2026-01-19 16:28:29
       */
      class GGJsb extends GGObserverSystem {
        constructor(...args) {
          super(...args);
          // private _iosClassName = "GGJsb";
          // private _iosMethodNameSync = "sync:";
          this._androidClassName = "com/gg/hp/Jsb";
          this._androidMethodNameSync = "sync";
        }
        /**
         * 由原生平台调用此方法。以告诉 TS 引擎触发事件回调
         *
         * @param eventName 回调事件名
         * @param param 回调参数，没有，或者有一个参数，当有一个参数时，该参数为Json字符串，并且经过Base64Encode，
         */
        onNativeCallBack(eventName, ...param) {
          let jsonObj = null;
          if (param && param[0]) {
            // 解码并反序列化 JSON 参数
            jsonObj = JSON.parse(param[0]);
          }
          {
            ggLogger.log(`GGJsb: native -> ts. event_name: ${eventName} event_params: ${JSON.stringify(jsonObj)}`);
          }
          this.emit(eventName, jsonObj);
        }

        /**
         * 请求原生模块方法结果（同步）
         *
         * @param reqModel 请求参数对象
         *
         * @returns 返回结果对象
         */
        syncCall(reqModel) {
          let respStr = null;

          // 通过 jsb 调用原生方法
          switch (sys.os) {
            // case sys.OS.IOS:
            //     respStr = native.reflection.callStaticMethod(this._iosClassName, this._iosMethodNameSync, JSON.stringify(requestModel));
            //     break;
            case sys.OS.ANDROID:
              {
                respStr = native.reflection.callStaticMethod(this._androidClassName, this._androidMethodNameSync, "(Ljava/lang/String;)Ljava/lang/String;", JSON.stringify(reqModel));
                break;
              }
            default:
              {
                return {
                  code: GGJsbResponseCode.InvalidPlatform,
                  msg: "unsupported platform"
                };
              }
          }

          // 解析返回参数
          let resp = null;
          try {
            resp = JSON.parse(respStr);
          } catch (error) {
            ggLogger.error(error);
            resp = {
              code: GGJsbResponseCode.InvalidResp,
              msg: "parse json failed"
            };
          }
          {
            if (resp.code == GGJsbResponseCode.Suc) {
              ggLogger.log(`GGJsb: ts -> native: suc: module: ${reqModel.module} function: ${reqModel.function} data: ${JSON.stringify(reqModel.data)} resp: ${JSON.stringify(resp)}`);
            } else {
              let msg = `GGJsb: ts -> native: err: failed to call native api.`;
              msg += `\n\nrequest params:`;
              msg += `\n  module: ${reqModel.module}`;
              msg += `\n  function: ${reqModel.function}`;
              msg += `\n  data: ${JSON.stringify(reqModel.data)}`;
              msg += `\n\nresponse params:`;
              msg += `\n  code: ${resp.code}`;
              msg += `\n  msg: ${resp.msg ?? ""}`;
              ggLogger.error(msg);
            }
          }
          return resp;
        }
      }
      const ggJsb = exports('ggJsb', new GGJsb());
      // 注册到全局对象，方便原生回调此类
      globalThis["ggJsb"] = globalThis["ggJsb"] ?? ggJsb;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GGLogger.ts", ['cc', './GGHotUpdateType.ts'], function (exports) {
  var cclegacy, error, GGHotUpdateVersion, GGHotUpdateName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      error = module.error;
    }, function (module) {
      GGHotUpdateVersion = module.GGHotUpdateVersion;
      GGHotUpdateName = module.GGHotUpdateName;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1552605TwFCurGZPuBWz1O2", "GGLogger", undefined);

      /**
       * 默认日志
       *
       * @author caizhitao
       * @created 2024-08-09 18:19:14
       */
      class GGLogger {
        constructor() {
          this.enable = false;
        }
        log(...args) {
          this.enable && console.log(...this._formatArgs(...args));
        }
        debug(...args) {
          this.enable && console.debug(...this._formatArgs(...args));
        }
        info(...args) {
          this.enable && console.info(...this._formatArgs(...args));
        }
        error(...args) {
          this.enable && console.error(...this._formatArgs(...args));
        }
        warn(...args) {
          this.enable && console.warn(...this._formatArgs(...args));
        }
        time(label) {
          this.enable && console.time(label);
        }
        timeEnd(label) {
          this.enable && console.timeEnd(label);
        }

        /**
         * 原生平台上不能直接打印object和array，因此这里将object和array转换为字符串进行输出，方便在 对应平台的开发工具中（如: Android Studio Logcat） 中直接看 log 结果
         */
        _formatArgs(...args) {
          {
            try {
              for (let i = 0; i < args.length; i++) {
                const arg = args[i];
                if (Array.isArray(arg) || typeof arg == "object") {
                  args[i] = JSON.stringify(arg);
                }
              }
            } catch (err) {
              error("打印日志异常，可以忽略，也可以排查");
            }
          }
          args.unshift(GGHotUpdateVersion);
          args.unshift(GGHotUpdateName);
          return args;
        }
      }
      const ggLogger = exports('ggLogger', new GGLogger());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GGObserverSystem.ts", ['cc', './GGEventManager.ts'], function (exports) {
  var cclegacy, GGEventManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GGEventManager = module.GGEventManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f0e02KZrYZNp6qwhcvYOYtO", "GGObserverSystem", undefined);

      /**
       * 观察者系统
       *
       * @author caizhitao
       * @created 2024-08-30 10:40:53
       */
      class GGObserverSystem {
        constructor() {
          this._observers = null;
          this._eventManager = null;
        }
        /**
         * 观察者
         */
        get observers() {
          if (this._observers == null) {
            this._observers = new Set();
          }
          return this._observers;
        }

        /**
         * 注册观察者
         */
        register(obserber) {
          this.observers.add(obserber);
        }
        /**
         * 注销观察者
         */
        unregister(observer) {
          this.observers.delete(observer);
        }
        /**
         * 注销所有观察者
         */
        unregisterAll() {
          this.observers.clear();
        }

        // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 事件广播相关接口

        /**
         * 事件管理器
         */
        get eventManager() {
          if (this._eventManager == null) {
            this._eventManager = new GGEventManager();
          }
          return this._eventManager;
        }
        /**
         * 监听消息
         *
         * @param msgId 消息id
         * @param callback 回调函数
         * @param target 回调函数执行对象
         */
        on(msgId, callback, target) {
          this.eventManager.on(msgId, callback, target);
        }

        /**
         * 监听消息（回调函数执行一次后会自动销毁，不用主动off）
         *
         * @param msgId 消息id
         * @param callback 回调函数
         * @param target 回调函数执行对象
         */
        onOnce(msgId, callback, target) {
          this.eventManager.onOnce(msgId, callback, target);
        }

        /**
         * 取消监听消息
         *
         * @param msgId 消息id
         * @param callback 回调函数
         * @param target 回调函数执行对象
         */
        off(msgId, callback, target) {
          this.eventManager.off(msgId, callback, target);
        }

        /**
         * 取消监听某个已经注册对象的所有消息
         *
         * @param target 回调函数的执行对象
         */
        offTarget(target) {
          this.eventManager.offTarget(target);
        }

        /**
         * 广播事件
         *
         * @param eventName 事件名
         * @param param 传递的剩余不定参数
         */
        emit(eventName, ...param) {
          this.eventManager.emit(eventName, ...param);
        }
      }
      exports('GGObserverSystem', GGObserverSystem);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GGZip.ts", ['cc', './GGObserverSystem.ts', './GGJsb.ts', './GGZipTypes.ts'], function (exports) {
  var cclegacy, sys, GGObserverSystem, ggJsb, GGJsbResponseCode, GGZipExtractZipTaskEvent;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      GGObserverSystem = module.GGObserverSystem;
    }, function (module) {
      ggJsb = module.ggJsb;
      GGJsbResponseCode = module.GGJsbResponseCode;
    }, function (module) {
      GGZipExtractZipTaskEvent = module.GGZipExtractZipTaskEvent;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d8721Ds6pFHQI5rWOBbsV5O", "GGZip", undefined);
      const ModelName = "zip";
      const CallBackEventOnExtractUpdated = "zip.OnExtractUpdated";

      /**
       * Zip 操作相关类
       *
       * @author caizhitao
       * @created 2026-01-21 10:59:41
       */
      class GGZip extends GGObserverSystem {
        constructor() {
          super();
          this._idCounter = 0;
          ggJsb.on(CallBackEventOnExtractUpdated, this._onExtractUpdated, this);
        }

        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 回调

        /**
         * 接收原生平台回调的 Zip 解压状态更新事件
         *
         * @param task
         */
        _onExtractUpdated(task) {
          // 将原生平台平台回调的事件转换分发
          this.emit(GGZipExtractZipTaskEvent.onExtractUpdated, task);
          this.observers.forEach(observer => {
            observer.onExtractUpdated == null || observer.onExtractUpdated(task);
          });
        }

        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // API

        /**
         * 当前平台是否支持使用 GGZip 能力
         */
        get isAvailable() {
          return sys.os == sys.OS.ANDROID;
        }

        /**
         * 创建并执行一个异步解压任务
         *
         * * Android 平台上会额外启用一个线程来执行解压任务，不阻塞游戏主线程
         *
         * @param option 参数
         *
         * @returns 创建成功则返回解压任务id，否则返回空
         */
        createExtractTask(option) {
          const id = "" + this._idCounter++;
          const resp = ggJsb.syncCall({
            module: ModelName,
            function: "extract_async",
            data: {
              id: id,
              zip_file_abs_path: option.zip_file_abs_path,
              zip_dest_dir_abs_path: option.zip_dest_dir_abs_path,
              zip_uncompressed_bytes: option.zip_uncompressed_bytes,
              remove_zip_dest_dir_before_extract: option.remove_zip_dest_dir_before_extract,
              delete_zip_after_extract: option.delete_zip_after_extract
            }
          });
          return resp.code == GGJsbResponseCode.Suc ? id : null;
        }

        /**
         * 取消解压
         *
         * * 如果 zip 正在解压中，则取消解压
         * * 如果 zip 解压已完成或解压任务不存在，则无任何效果
         *
         * @param id 解压任务id
         */
        cancel(id) {
          return ggJsb.syncCall({
            module: ModelName,
            function: "cancel",
            data: {
              id: id
            }
          });
        }

        /**
         * 释放解压任务
         *
         * * 如果存在任务，则会自动取消解压后，再释放
         *
         * @param id 解压任务id
         */
        release(id) {
          return ggJsb.syncCall({
            module: ModelName,
            function: "release",
            data: {
              id: id
            }
          });
        }

        /**
         * 释放所有解压任务
         *
         * * 如果存在任务，则会自动取消解压后，再释放
         */
        releaseAll() {
          return ggJsb.syncCall({
            module: ModelName,
            function: "release_all"
          });
        }
      }
      const ggZip = exports('ggZip', new GGZip());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GGZipTypes.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "18852k1f8lHJp5Zb30xAxZt", "GGZipTypes", undefined);
      /**
       * Zip 解压任务观察者
       */
      /**
       * Zip 解压任务事件
       */
      let GGZipExtractZipTaskEvent = exports('GGZipExtractZipTaskEvent', /*#__PURE__*/function (GGZipExtractZipTaskEvent) {
        GGZipExtractZipTaskEvent["onExtractUpdated"] = "onExtractUpdated";
        return GGZipExtractZipTaskEvent;
      }({}));

      /**
       * Zip 解压任务信息
       */

      /**
       * Zip 解压状态
       */
      let GGZipExtractZipStatus = exports('GGZipExtractZipStatus', /*#__PURE__*/function (GGZipExtractZipStatus) {
        GGZipExtractZipStatus[GGZipExtractZipStatus["Idle"] = 0] = "Idle";
        GGZipExtractZipStatus[GGZipExtractZipStatus["Start"] = 1] = "Start";
        GGZipExtractZipStatus[GGZipExtractZipStatus["Extracting"] = 2] = "Extracting";
        GGZipExtractZipStatus[GGZipExtractZipStatus["Suc"] = 3] = "Suc";
        GGZipExtractZipStatus[GGZipExtractZipStatus["Cancelled"] = 4] = "Cancelled";
        GGZipExtractZipStatus[GGZipExtractZipStatus["Error"] = 5] = "Error";
        return GGZipExtractZipStatus;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LaunchScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Config2.ts', './MockData.ts', './GGHotUpdateManager.ts', './GGHotUpdateType.ts', './SceneRouter.ts', './SceneConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Asset, _decorator, Component, find, ProgressBar, Label, sys, assetManager, director, Config, MockData, ggHotUpdateManager, GGHotUpdateInstanceEnum, GGHotUpdateInstanceState;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Asset = module.Asset;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      sys = module.sys;
      assetManager = module.assetManager;
      director = module.director;
    }, function (module) {
      Config = module.Config;
    }, function (module) {
      MockData = module.MockData;
    }, function (module) {
      ggHotUpdateManager = module.ggHotUpdateManager;
    }, function (module) {
      GGHotUpdateInstanceEnum = module.GGHotUpdateInstanceEnum;
      GGHotUpdateInstanceState = module.GGHotUpdateInstanceState;
    }, null, null],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "fa0eaKMCx1JFqYahqzE+L1k", "LaunchScene", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * Launch 场景启动组件（统一入口，带 UI 进度条）
       *
       * 职责：
       * 1. 初始化配置
       * 2. 获取包名 → 拉取产品配置
       * 3. 原生平台：首次 ZIP 下载 / 后续 AssetsManager 差分更新
       * 4. 加载核心包 → 初始化框架 → 加载大厅包 → 进入大厅场景
       */
      let LaunchScene = exports('LaunchScene', (_dec = ccclass('LaunchScene'), _dec2 = property(Asset), _dec3 = property(Asset), _dec(_class = (_class2 = class LaunchScene extends Component {
        constructor(...args) {
          super(...args);
          /** 核心包本地 manifest（编辑器中拖入 manifest/lobby-casino-core/project.manifest） */
          _initializerDefineProperty(this, "coreManifest", _descriptor, this);
          /** 大厅包本地 manifest（编辑器中拖入 manifest/lobby-casino/project.manifest） */
          _initializerDefineProperty(this, "lobbyManifest", _descriptor2, this);
          /** 进度条 */
          this.progressBar = null;
          /** 提示文本 */
          this.lblTips = null;
          /** 热更新核心 (Legacy) */
          this.hotUpdate = null;
          /** 产品配置 */
          this.productConfig = null;
        }
        onLoad() {
          console.log('[LaunchScene] 启动场景加载');
          this.initSceneNodes();
          Config.init();
        }
        start() {
          this.startBootstrap().catch(error => {
            console.error('[LaunchScene] 启动失败:', error);
            this.showError(error);
          });
        }
        initSceneNodes() {
          const progressNode = find('Canvas/progress_update', this.node.scene);
          if (progressNode) {
            this.progressBar = progressNode.getComponent(ProgressBar);
          }
          const tipsNode = find('Canvas/lbl_tips', this.node.scene);
          if (tipsNode) {
            this.lblTips = tipsNode.getComponent(Label);
          }
        }

        /**
         * 启动流程
         */
        async startBootstrap() {
          // 1. 获取包名
          this.setProgress(0, '正在初始化...');
          const packageName = await this.getPackageName();
          console.log('[LaunchScene] 包名:', packageName);

          // 2. 拉取产品配置
          this.setProgress(0.05, '加载配置...');
          this.productConfig = await this.fetchProductConfig(packageName);
          Config.setProductConfig(this.productConfig.cdnBase);
          const coreBundleName = this.productConfig.coreBundle;
          const lobbyBundleName = this.productConfig.lobbyBundle;

          // 3. 原生平台热更新
          if (sys.isNative) {
            this.setProgress(0.05, '初始化更新管理器...');
            ggHotUpdateManager.init({
              packageUrl: Config.CDN_BASE,
              enableLog: Config.DEBUG
            });

            // 初始化旧接口兼容性
            this.initLegacyCompatibility();

            // 更新核心包（5% → 50%）
            this.setProgress(0.05, '检查核心包更新...');
            await this.updateBundleWithGG(coreBundleName, 0.05, 0.50);

            // 更新大厅包（50% → 80%）
            this.setProgress(0.5, '检查大厅更新...');
            await this.updateBundleWithGG(lobbyBundleName, 0.50, 0.80);

            // 检查是否需要重启
            // 对于主包(build-in)或有脚本更新的包，插件通常会建议重启
            // 这里简易判断：如果有任何包更新成功，则尝试重启
            // 实际上 gg-hot-update 会在 success 时建议重启主包
            const buildInInstance = ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn);
            if (buildInInstance.state === GGHotUpdateInstanceState.HotUpdateSuc) {
              this.setProgress(1.0, '更新完成，正在重启...');
              await this.delay(1000);
              ggHotUpdateManager.restartGame();
              return;
            }
          }

          // 4. 加载核心包
          this.setProgress(0.8, '加载核心包...');
          await this.loadBundle(coreBundleName);

          // 5. 初始化核心框架
          this.setProgress(0.85, '初始化核心框架...');
          await this.initCoreFramework();

          // 6. 加载大厅包
          this.setProgress(0.9, '加载大厅...');
          await this.loadBundle(lobbyBundleName);

          // 7. 进入大厅
          this.setProgress(1.0, '启动完成！');
          await this.delay(500);
          await this.enterLobby();
        }

        // ============ 包名检测 ============

        async getPackageName() {
          if (Config.DEBUG) {
            const debugPackage = sys.localStorage.getItem(Config.STORAGE_KEY_DEBUG_PACKAGE);
            if (debugPackage) return debugPackage;
          }
          if (sys.isNative) {
            const savedPackage = sys.localStorage.getItem('app_package_name');
            if (savedPackage) return savedPackage;
            return 'com.kb.game.cocos.testsub';
          }
          if (sys.isBrowser) {
            const urlParams = new URLSearchParams(window.location.search);
            const pkgParam = urlParams.get('package');
            if (pkgParam) return pkgParam;
            const hostname = window.location.hostname;
            if (hostname.includes('sports')) return 'com.example.sports';
            if (hostname.includes('casino')) return 'com.example.casino';
            if (hostname.includes('arcade')) return 'com.example.arcade';
          }
          return 'com.kb.game.cocos.testsub';
        }

        // ============ 数据获取 ============

        async fetchProductConfig(packageName) {
          if (Config.DEBUG) {
            return MockData.mockHttpRequest(`${Config.API_CONFIG_URL}/${packageName}.json`, () => MockData.getProductConfig(packageName));
          }
          const configUrl = `${Config.API_CONFIG_URL}/${packageName}.json`;
          return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
              if (xhr.status === 200) {
                try {
                  resolve(JSON.parse(xhr.responseText));
                } catch {
                  reject(new Error('产品配置解析失败'));
                }
              } else {
                reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`));
              }
            };
            xhr.onerror = () => reject(new Error('网络错误'));
            xhr.ontimeout = () => reject(new Error('请求超时'));
            xhr.open('GET', configUrl, true);
            xhr.timeout = Config.REQUEST_TIMEOUT;
            xhr.send();
          });
        }

        // ============ Bundle 加载 ============

        async loadBundle(bundleName) {
          const existing = assetManager.getBundle(bundleName);
          if (existing) {
            console.log(`[LaunchScene] Bundle 已加载: ${bundleName}`);
            return;
          }

          // 原生平台：插件会自动处理搜索路径，assetManager 加载时会优先从热更目录查找
          let bundleUrl = bundleName;
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(bundleUrl, error => {
              if (error) {
                console.error(`[LaunchScene] Bundle 加载失败: ${bundleName}`, error);
                reject(error);
                return;
              }
              console.log(`[LaunchScene] Bundle 加载成功: ${bundleName}`);
              resolve();
            });
          });
        }
        async initCoreFramework() {
          const MApp = globalThis.MApp;
          if (MApp && typeof MApp.init === 'function') {
            await MApp.init();
            console.log('[LaunchScene] 核心框架初始化完成');
          } else {
            console.warn('[LaunchScene] globalThis.MApp 不存在，跳过核心框架初始化');
          }
        }
        async enterLobby() {
          var _this$productConfig;
          const MApp = globalThis.MApp;
          if (MApp && typeof MApp.enterLobby === 'function') {
            await MApp.enterLobby();
            console.log('[LaunchScene] 已进入大厅');
            return;
          }
          const lobbyBundleName = ((_this$productConfig = this.productConfig) == null ? void 0 : _this$productConfig.lobbyBundle) || 'lobby-casino';
          const bundle = assetManager.getBundle(lobbyBundleName);
          if (!bundle) {
            throw new Error(`Bundle 未加载: ${lobbyBundleName}`);
          }
          return new Promise((resolve, reject) => {
            bundle.loadScene('Lobby', (err, sceneAsset) => {
              if (err) {
                console.error('[LaunchScene] 加载 Lobby 场景失败:', err);
                reject(err);
                return;
              }
              director.runScene(sceneAsset);
              console.log('[LaunchScene] 成功切换到 Lobby 场景');
              resolve();
            });
          });
        }

        // ============ UI ============

        setProgress(progress, text) {
          if (this.progressBar) this.progressBar.progress = progress;
          if (this.lblTips) this.lblTips.string = text;
          console.log(`[LaunchScene] [${Math.floor(progress * 100)}%] ${text}`);
        }
        showError(error) {
          this.setProgress(0, `启动失败：${error.message}`);
        }

        // ============ 插件集成辅助 ============

        /**
         * 兼容旧接口，供 PopupManager 等组件使用
         */
        initLegacyCompatibility() {
          globalThis.__hotUpdate = {
            ensureBundleReady: async (bundleName, onProgress) => {
              console.log(`[LaunchScene] [LegacyCompat] ensureBundleReady: ${bundleName}`);
              if (!sys.isNative) return bundleName;
              try {
                // 这里可以决定是否显示进度，子系统加载通常不希望打断主流程，
                // 但由于 PopupManager 会等待这个 Promise，我们可以静默更新
                await this.updateBundleWithGG(bundleName, 0, 1, true);
              } catch (e) {
                console.error(`[LaunchScene] [LegacyCompat] ${bundleName} 预热失败:`, e);
              }

              // 插件已处理搜索路径，直接返回 bundleName
              return bundleName;
            },
            // 保持方法签名兼容
            getBundleStoragePath: bundleName => {
              return `${ggHotUpdateManager.localRootDirPath}/${bundleName}`;
            }
          };
        }

        /**
         * 使用 GGHotUpdate 插件更新 Bundle
         */
        async updateBundleWithGG(bundleName, progressStart, progressEnd, silent = false) {
          if (!sys.isNative) return;
          return new Promise((resolve, reject) => {
            const instance = ggHotUpdateManager.getInstance(bundleName);
            const observer = {
              onGGHotUpdateInstanceCallBack: inst => {
                console.log(`[LaunchScene] [GGHotUpdate] ${bundleName} 状态: ${inst.state}`);
                switch (inst.state) {
                  case GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate:
                    instance.unregister(observer);
                    resolve();
                    break;
                  case GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound:
                    inst.hotUpdate();
                    break;
                  case GGHotUpdateInstanceState.HotUpdateDownloading:
                  case GGHotUpdateInstanceState.HotUpdateExtracting:
                    if (!silent) {
                      // 插件内部会计算进度
                      const progress = inst.totalBytes > 0 ? inst.downloadedBytes / inst.totalBytes : 0;
                      const p = progressStart + progress * (progressEnd - progressStart);
                      this.setProgress(p, `正在更新${bundleName}... ${Math.floor(p * 100)}%`);
                    }
                    break;
                  case GGHotUpdateInstanceState.HotUpdateSuc:
                    instance.unregister(observer);
                    resolve();
                    break;
                  case GGHotUpdateInstanceState.HotUpdateFailed:
                    instance.unregister(observer);
                    reject(new Error(`${bundleName} 热更新失败`));
                    break;
                  // 处理各种检查失败状态
                  case GGHotUpdateInstanceState.CheckUpdateFailedParseLocalProjectManifestError:
                  case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteVersionManifestError:
                  case GGHotUpdateInstanceState.CheckUpdateFailedDownloadRemoteProjectManifestError:
                  case GGHotUpdateInstanceState.CheckUpdateFailedParseRemoteProjectManifestError:
                    instance.unregister(observer);
                    resolve(); // 检查失败也尝试加载，可能是网络问题或者该 Bundle 不在热更列表
                    break;
                }
              }
            };
            instance.register(observer);
            instance.checkUpdate();
          });
        }

        /**
         * 必要时实现接口方法（虽然我们使用了匿名观察者，但为了类型安全这里显式留空或实现）
         */
        onGGHotUpdateInstanceCallBack(instance) {
          // 统一处理可以在这里，但我们使用了局部 Promise 封装
        }
        retry() {
          this.setProgress(0, '正在重试...');
          this.startBootstrap().catch(error => this.showError(error));
        }
        delay(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }
        onDestroy() {
          // 插件管理器在重启时会自动销毁实例
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coreManifest", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lobbyManifest", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Config2.ts', './LaunchScene.ts', './MockData.ts', './ProgressBarTarget.ts', './SceneConfig.ts', './SceneRouter.ts', './Splash.ts', './Types.ts', './FileUtils.ts', './Md5.ts', './GGHotUpdateInstance.ts', './GGHotUpdateManager.ts', './GGHotUpdateType.ts', './GGJsb.ts', './GGZip.ts', './GGZipTypes.ts', './GGEventManager.ts', './GGLogger.ts', './GGObserverSystem.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Md5.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3cc60YSgalO85T9wm8aX9sX", "Md5", undefined);
      /**
       * MD5 哈希计算工具
       *
       * 基于原有的 Md5.js 实现
       */

      class Md5 {
        /**
         * 计算字符串的 MD5
         */
        static hash(input) {
          if (typeof input === 'string') {
            return this.hashString(input);
          } else {
            return this.hashArrayBuffer(input);
          }
        }

        /**
         * 计算字符串的 MD5
         */
        static hashString(str) {
          const utf8 = this.str2utf8(str);
          return this.binl_md5(utf8, utf8.length * 8);
        }

        /**
         * 计算 ArrayBuffer 的 MD5
         */
        static hashArrayBuffer(buffer) {
          const bytes = new Uint8Array(buffer);
          const words = [];

          // 转换为 32 位整数数组
          for (let i = 0; i < bytes.length; i += 4) {
            const word = bytes[i] << 0 | bytes[i + 1] << 8 | bytes[i + 2] << 16 | bytes[i + 3] << 24;
            words.push(word);
          }
          return this.binl_md5(words, bytes.length * 8);
        }

        /**
         * 字符串转 UTF-8 编码
         */
        static str2utf8(str) {
          const result = [];
          for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i);
            if (code < 0x80) {
              result.push(code);
            } else if (code < 0x800) {
              result.push(0xc0 | code >> 6, 0x80 | code & 0x3f);
            } else if (code < 0x10000) {
              result.push(0xe0 | code >> 12, 0x80 | code >> 6 & 0x3f, 0x80 | code & 0x3f);
            } else {
              result.push(0xf0 | code >> 18, 0x80 | code >> 12 & 0x3f, 0x80 | code >> 6 & 0x3f, 0x80 | code & 0x3f);
            }
          }
          return result;
        }

        /**
         * 核心 MD5 计算
         */
        static binl_md5(x, len) {
          // 填充
          x[len >> 5] |= 0x80 << len % 32;
          x[(len + 64 >>> 9 << 4) + 14] = len;
          let a = 1732584193;
          let b = -271733879;
          let c = -1732584194;
          let d = 271733878;
          for (let i = 0; i < x.length; i += 16) {
            const olda = a;
            const oldb = b;
            const oldc = c;
            const oldd = d;
            a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = this.safe_add(a, olda);
            b = this.safe_add(b, oldb);
            c = this.safe_add(c, oldc);
            d = this.safe_add(d, oldd);
          }
          return this.rhex(a) + this.rhex(b) + this.rhex(c) + this.rhex(d);
        }
        static md5_ff(a, b, c, d, x, s, t) {
          return this.md5_cmn(b & c | ~b & d, a, b, x, s, t);
        }
        static md5_gg(a, b, c, d, x, s, t) {
          return this.md5_cmn(b & d | c & ~d, a, b, x, s, t);
        }
        static md5_hh(a, b, c, d, x, s, t) {
          return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
        }
        static md5_ii(a, b, c, d, x, s, t) {
          return this.md5_cmn(c ^ (b | ~d), a, b, x, s, t);
        }
        static md5_cmn(q, a, b, x, s, t) {
          return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
        }
        static safe_add(x, y) {
          const lsw = (x & 0xffff) + (y & 0xffff);
          const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return msw << 16 | lsw & 0xffff;
        }
        static bit_rol(num, cnt) {
          return num << cnt | num >>> 32 - cnt;
        }
        static rhex(num) {
          let str = '';
          for (let j = 0; j <= 3; j++) {
            str += this.hex_chr(num >> j * 8 + 4 & 0x0f) + this.hex_chr(num >> j * 8 & 0x0f);
          }
          return str;
        }
        static hex_chr(num) {
          return num.toString(16);
        }
      }
      exports('Md5', Md5);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MockData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ccca4e7gKtE0LQRwnDkW1c4", "MockData", undefined);
      /**
       * Mock 数据管理器
       *
       * 用于本地开发和测试，模拟服务器数据
       */
      class MockData {
        /**
         * 获取产品配置 Mock 数据
         */
        static getProductConfig(packageName) {
          const configs = {
            'com.example.sports': {
              name: 'sports',
              displayName: '体育游戏',
              packageName: 'com.example.sports',
              cdnBase: 'http://localhost:8080/bundles',
              coreBundle: 'core-sports',
              lobbyBundle: 'lobby-sports',
              apiConfigUrl: 'http://localhost:8080/config'
            },
            'com.example.casino': {
              name: 'casino',
              displayName: '娱乐城游戏',
              packageName: 'com.example.casino',
              cdnBase: 'http://localhost:8080/bundles',
              coreBundle: 'lobby-casino-core',
              lobbyBundle: 'lobby-casino',
              apiConfigUrl: 'http://localhost:8080/config'
            },
            'com.example.arcade': {
              name: 'arcade',
              displayName: '街机游戏',
              packageName: 'com.example.arcade',
              cdnBase: 'http://localhost:8080/bundles',
              coreBundle: 'core-arcade',
              lobbyBundle: 'lobby-arcade',
              apiConfigUrl: 'http://localhost:8080/config'
            },
            'com.kb.game.cocos.testsub': {
              name: 'casino',
              displayName: '娱乐城游戏',
              packageName: 'com.kb.game.cocos.testsub',
              cdnBase: 'http://localhost:8080/bundles',
              coreBundle: 'lobby-casino-core',
              lobbyBundle: 'lobby-casino',
              apiConfigUrl: 'http://localhost:8080/config'
            }
          };
          return configs[packageName] || configs['com.kb.game.cocos.testsub'] || configs['com.example.casino'];
        }

        /**
         * 获取 Manifest Mock 数据
         */
        static getManifest(cdnBase) {
          return {
            version: '1.0.0',
            cdnBase: cdnBase,
            minAppVersion: '1.0.0',
            bundles: {
              // 核心包 - 体育
              'core-sports': {
                name: 'core-sports',
                version: '1.0.0',
                zip: {
                  url: `${cdnBase}/core-sports.zip`,
                  size: 1024 * 1024 * 5,
                  // 5MB
                  md5: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'
                },
                files: {
                  'index.js': {
                    url: `${cdnBase}/core-sports/index.js`,
                    size: 1024 * 100,
                    // 100KB
                    md5: 'file_md5_core_sports_index'
                  },
                  'config.json': {
                    url: `${cdnBase}/core-sports/config.json`,
                    size: 1024 * 10,
                    // 10KB
                    md5: 'file_md5_core_sports_config'
                  }
                }
              },
              // 大厅包 - 体育
              'lobby-sports': {
                name: 'lobby-sports',
                version: '1.0.0',
                zip: {
                  url: `${cdnBase}/lobby-sports.zip`,
                  size: 1024 * 1024 * 3,
                  // 3MB
                  md5: 'b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7'
                },
                files: {
                  'index.js': {
                    url: `${cdnBase}/lobby-sports/index.js`,
                    size: 1024 * 200,
                    // 200KB
                    md5: 'file_md5_lobby_sports_index'
                  },
                  'assets/images/bg.png': {
                    url: `${cdnBase}/lobby-sports/assets/images/bg.png`,
                    size: 1024 * 500,
                    // 500KB
                    md5: 'file_md5_lobby_sports_bg'
                  }
                }
              },
              // 核心包 - 娱乐城
              'core-casino': {
                name: 'core-casino',
                version: '1.0.0',
                zip: {
                  url: `${cdnBase}/core-casino.zip`,
                  size: 1024 * 1024 * 4,
                  // 4MB
                  md5: 'c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8'
                }
              },
              // 大厅包 - 娱乐城
              'lobby-casino': {
                name: 'lobby-casino',
                version: '1.0.0',
                zip: {
                  url: `${cdnBase}/lobby-casino.zip`,
                  size: 1024 * 1024 * 2,
                  // 2MB
                  md5: 'd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9'
                }
              }
            }
          };
        }

        /**
         * 获取服务器状态 Mock 数据
         */
        static getServerStatus() {
          return {
            code: 200,
            message: 'OK',
            data: {
              // 是否提审状态 ("hao" = 正常, "buhao" = 提审)
              la: 'hao',
              // 版本信息
              version: {
                version: '1.0.0',
                subVer: 'mock_subver_md5',
                minAppVersion: '1.0.0'
              },
              // 登录信息
              loginInfo: {
                apiUrl: 'http://localhost:8080/api',
                wsUrl: 'ws://localhost:8080/ws'
              }
            }
          };
        }

        /**
         * 模拟网络延迟
         */
        static async delay(ms = 300) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }

        /**
         * 模拟 HTTP 请求
         */
        static async mockHttpRequest(url, getData, delayMs = 300) {
          console.log(`[MockData] 模拟请求: ${url}`);
          await this.delay(delayMs);
          const data = getData();
          console.log(`[MockData] 返回数据:`, data);
          return data;
        }
      }
      exports('MockData', MockData);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProgressBarTarget.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, ProgressBar, _decorator, Component, Vec3;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      ProgressBar = module.ProgressBar;
      _decorator = module._decorator;
      Component = module.Component;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "24504slonJFDL2fy7KJiKMR", "ProgressBarTarget", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 进度条跟随指示器
       * 将节点位置绑定到 ProgressBar 的当前进度位置
       */
      let ProgressBarTarget = exports('ProgressBarTarget', (_dec = ccclass('ProgressBarTarget'), _dec2 = property(ProgressBar), _dec(_class = (_class2 = class ProgressBarTarget extends Component {
        constructor(...args) {
          super(...args);
          _initializerDefineProperty(this, "progressBar", _descriptor, this);
          this._tempPos = new Vec3();
        }
        update(dt) {
          if (!this.progressBar) return;
          const barSprite = this.progressBar.barSprite;
          if (!barSprite) return;
          const pos = barSprite.node.position;
          this._tempPos.set(pos.x + this.progressBar.progress * this.progressBar.totalLength, pos.y, pos.z);
          this.node.position = this._tempPos;
        }
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7e592DWswxLubkOy1djEmsB", "SceneConfig", undefined);
      /**
       * 项目场景配置
       *
       * 所有场景的 bundle + sceneName 集中定义，避免硬编码。
       */
      class GameSceneConfig {}
      exports('GameSceneConfig', GameSceneConfig);

      // 注册到 globalThis，子游戏可通过 (globalThis as any).GameSceneConfig 访问
      /** 启动/引导场景（主包） */
      GameSceneConfig.Launch = {
        bundleName: 'main',
        sceneName: 'Launch'
      };
      /** 大厅场景 */
      GameSceneConfig.Lobby = {
        bundleName: 'lobby-casino',
        sceneName: 'Lobby'
      };
      /** FlappyBird 子游戏 */
      GameSceneConfig.FlappyBird = {
        bundleName: 'flappy-bird',
        sceneName: 'FlappyBird'
      };
      globalThis.GameSceneConfig = GameSceneConfig;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneRouter.ts", ['cc'], function (exports) {
  var cclegacy, director, assetManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      assetManager = module.assetManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a796fXisZRATKnhyqkLCbYk", "SceneRouter", undefined);

      /**
       * 场景配置
       */

      /**
       * 统一场景路由器
       *
       * 参考 gg-hot-update 官方示例，集中管理所有场景切换。
       * 子游戏、大厅、启动场景统一通过 sceneRouter 进出。
       */
      class SceneRouterImpl {
        /**
         * 加载 bundle 场景资源（不切换）
         */
        async loadSceneAsync(config) {
          console.log(`[SceneRouter] 加载 ${config.bundleName}/${config.sceneName}`);
          try {
            const bundle = await this.loadBundle(config.bundleName);
            return await new Promise((resolve, reject) => {
              bundle.loadScene(config.sceneName, (err, asset) => {
                if (err) {
                  console.error(`[SceneRouter] 加载场景失败: ${config.sceneName}`, err);
                  reject(err);
                  return;
                }
                resolve(asset);
              });
            });
          } catch (err) {
            console.error(`[SceneRouter] loadSceneAsync 失败:`, err);
            return null;
          }
        }

        /**
         * 加载并切换到目标场景
         */
        async runSceneAsync(config) {
          var _director$getScene;
          console.log(`[SceneRouter] 离开 ${((_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.name) ?? ''}`);
          const sceneAsset = await this.loadSceneAsync(config);
          if (sceneAsset) {
            director.runScene(sceneAsset);
            console.log(`[SceneRouter] 进入 ${config.bundleName}/${config.sceneName}`);
          } else {
            console.error(`[SceneRouter] 进入场景失败: ${config.bundleName}/${config.sceneName}`);
          }
        }
        loadBundle(bundleName) {
          const existing = assetManager.getBundle(bundleName);
          if (existing) return Promise.resolve(existing);
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(bundleName, (err, bundle) => {
              if (err) {
                console.error(`[SceneRouter] 加载 bundle 失败: ${bundleName}`, err);
                reject(err);
                return;
              }
              resolve(bundle);
            });
          });
        }
      }
      const sceneRouter = exports('sceneRouter', new SceneRouterImpl());

      // 注册到 globalThis，子游戏可通过 (globalThis as any).sceneRouter 访问
      globalThis.sceneRouter = sceneRouter;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Splash.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Config2.ts', './MockData.ts', './GGHotUpdateManager.ts', './GGHotUpdateType.ts', './SceneRouter.ts', './SceneConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Asset, _decorator, Component, sys, director, assetManager, Config, MockData, ggHotUpdateManager, GGHotUpdateInstanceEnum, GGHotUpdateInstanceState;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Asset = module.Asset;
      _decorator = module._decorator;
      Component = module.Component;
      sys = module.sys;
      director = module.director;
      assetManager = module.assetManager;
    }, function (module) {
      Config = module.Config;
    }, function (module) {
      MockData = module.MockData;
    }, function (module) {
      ggHotUpdateManager = module.ggHotUpdateManager;
    }, function (module) {
      GGHotUpdateInstanceEnum = module.GGHotUpdateInstanceEnum;
      GGHotUpdateInstanceState = module.GGHotUpdateInstanceState;
    }, null, null],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "cfebeNl2+lK5rrY6fi81baA", "Splash", undefined);
      const {
        ccclass,
        property
      } = _decorator;

      /**
       * 启动引导组件（Splash）
       *
       * 职责：
       * 1. 位于 assets/main/，确保被打包进主包（Main Bundle）
       * 2. 原生平台：首次 ZIP 下载 / 后续 AssetsManager 差分更新
       * 3. 热更新完成后：加载核心包 → 初始化框架 → 加载大厅包 → 进入大厅场景
       */
      let Splash = exports('Splash', (_dec = ccclass('Splash'), _dec2 = property(Asset), _dec3 = property(Asset), _dec(_class = (_class2 = class Splash extends Component {
        constructor(...args) {
          super(...args);
          /** 核心包本地 manifest */
          _initializerDefineProperty(this, "coreManifest", _descriptor, this);
          /** 大厅包本地 manifest */
          _initializerDefineProperty(this, "lobbyManifest", _descriptor2, this);
          this.hotUpdate = null;
          this.productConfig = null;
        }
        start() {
          console.log('[Splash] 启动 Bootstrapper...');
          Config.init();
          this.startLoad();
        }
        async startLoad() {
          try {
            // 1. 获取产品配置
            const packageName = this.getPackageName();
            console.log('[Splash] 包名:', packageName);
            this.productConfig = await this.fetchProductConfig(packageName);
            Config.setProductConfig(this.productConfig.cdnBase);
            const coreBundleName = this.productConfig.coreBundle;
            const lobbyBundleName = this.productConfig.lobbyBundle;

            // 2. 原生平台：热更新
            if (sys.isNative) {
              console.log('[Splash] 初始化更新管理器...');
              ggHotUpdateManager.init({
                packageUrl: Config.CDN_BASE,
                enableLog: Config.DEBUG
              });

              // 初始化旧接口兼容性
              this.initLegacyCompatibility();

              // 更新核心包
              console.log('[Splash] 检查核心包更新...');
              await this.updateBundleWithGG(coreBundleName);

              // 更新大厅包
              console.log('[Splash] 检查大厅包更新...');
              await this.updateBundleWithGG(lobbyBundleName);

              // 检查是否需要重启
              const buildInInstance = ggHotUpdateManager.getInstance(GGHotUpdateInstanceEnum.BuildIn);
              if (buildInInstance.state === GGHotUpdateInstanceState.HotUpdateSuc) {
                console.log('[Splash] 更新完成，重启游戏...');
                setTimeout(() => ggHotUpdateManager.restartGame(), 1000);
                return;
              }
            }

            // 3. 加载核心包
            console.log(`[Splash] 加载 ${coreBundleName}...`);
            await this.loadBundlePromise(coreBundleName);

            // 4. 初始化核心框架
            const MApp = globalThis.MApp;
            if (MApp && typeof MApp.init === 'function') {
              console.log('[Splash] 初始化 MApp...');
              await MApp.init();
            }

            // 5. 加载大厅包
            console.log(`[Splash] 加载 ${lobbyBundleName}...`);
            const lobbyBundle = await this.loadBundlePromise(lobbyBundleName);

            // 6. 进入大厅场景
            await this.enterLobby(lobbyBundle);
          } catch (error) {
            console.error('[Splash] 引导流程异常:', error);
          }
        }
        async enterLobby(lobbyBundle) {
          const MApp = globalThis.MApp;
          if (MApp && typeof MApp.enterLobby === 'function') {
            await MApp.enterLobby();
            return;
          }
          return new Promise((resolve, reject) => {
            lobbyBundle.loadScene('Lobby', (err, sceneAsset) => {
              if (err) {
                reject(err);
                return;
              }
              director.runScene(sceneAsset);
              console.log('[Splash] 成功切换到 Lobby 场景');
              resolve();
            });
          });
        }
        getPackageName() {
          if (Config.DEBUG) {
            const debugPackage = sys.localStorage.getItem(Config.STORAGE_KEY_DEBUG_PACKAGE);
            if (debugPackage) return debugPackage;
          }
          if (sys.isNative) {
            const savedPackage = sys.localStorage.getItem('app_package_name');
            if (savedPackage) return savedPackage;
            return 'com.kb.game.cocos.testsub';
          }
          if (sys.isBrowser) {
            const urlParams = new URLSearchParams(window.location.search);
            const pkgParam = urlParams.get('package');
            if (pkgParam) return pkgParam;
            const hostname = window.location.hostname;
            if (hostname.includes('sports')) return 'com.example.sports';
            if (hostname.includes('casino')) return 'com.example.casino';
            if (hostname.includes('arcade')) return 'com.example.arcade';
          }
          return 'com.kb.game.cocos.testsub';
        }
        async fetchProductConfig(packageName) {
          if (Config.DEBUG) {
            return MockData.mockHttpRequest(`${Config.API_CONFIG_URL}/${packageName}.json`, () => MockData.getProductConfig(packageName));
          }
          const configUrl = `${Config.API_CONFIG_URL}/${packageName}.json`;
          return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
              if (xhr.status === 200) {
                try {
                  resolve(JSON.parse(xhr.responseText));
                } catch {
                  reject(new Error('产品配置解析失败'));
                }
              } else {
                reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`));
              }
            };
            xhr.onerror = () => reject(new Error('网络错误'));
            xhr.ontimeout = () => reject(new Error('请求超时'));
            xhr.open('GET', configUrl, true);
            xhr.timeout = Config.REQUEST_TIMEOUT;
            xhr.send();
          });
        }
        loadBundlePromise(name) {
          const existing = assetManager.getBundle(name);
          if (existing) return Promise.resolve(existing);

          // 原生平台：插件会自动处理搜索路径
          let bundleUrl = name;
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(bundleUrl, (err, bundle) => {
              if (err) reject(err);else resolve(bundle);
            });
          });
        }

        /**
         * 兼容旧接口，供 PopupManager 等组件使用
         */
        initLegacyCompatibility() {
          globalThis.__hotUpdate = {
            ensureBundleReady: async (bundleName, onProgress) => {
              console.log(`[Splash] [LegacyCompat] ensureBundleReady: ${bundleName}`);
              if (!sys.isNative) return bundleName;
              try {
                await this.updateBundleWithGG(bundleName, true);
              } catch (e) {
                console.error(`[Splash] [LegacyCompat] ${bundleName} 预热失败:`, e);
              }
              return bundleName;
            },
            // 保持方法签名兼容
            getBundleStoragePath: bundleName => {
              return `${ggHotUpdateManager.localRootDirPath}/${bundleName}`;
            }
          };
        }

        /**
         * 使用 GGHotUpdate 插件更新 Bundle
         */
        async updateBundleWithGG(bundleName, silent = false) {
          if (!sys.isNative) return;
          return new Promise((resolve, reject) => {
            const instance = ggHotUpdateManager.getInstance(bundleName);
            const observer = {
              onGGHotUpdateInstanceCallBack: inst => {
                console.log(`[Splash] [GGHotUpdate] ${bundleName} 状态: ${inst.state}`);
                switch (inst.state) {
                  case GGHotUpdateInstanceState.CheckUpdateSucAlreadyUpToDate:
                    instance.unregister(observer);
                    resolve();
                    break;
                  case GGHotUpdateInstanceState.CheckUpdateSucNewVersionFound:
                    inst.hotUpdate();
                    break;
                  case GGHotUpdateInstanceState.HotUpdateDownloading:
                  case GGHotUpdateInstanceState.HotUpdateExtracting:
                    if (!silent) {
                      console.log(`[Splash] ${bundleName} 更新中...`);
                    }
                    break;
                  case GGHotUpdateInstanceState.HotUpdateSuc:
                    instance.unregister(observer);
                    resolve();
                    break;
                  case GGHotUpdateInstanceState.HotUpdateFailed:
                    instance.unregister(observer);
                    reject(new Error(`${bundleName} 热更新失败`));
                    break;
                  case inst.state.startsWith('CheckUpdateFailed'):
                    instance.unregister(observer);
                    resolve(); // 检查失败也尝试加载
                    break;
                }
              }
            };
            instance.register(observer);
            instance.checkUpdate();
          });
        }
        onGGHotUpdateInstanceCallBack(instance) {}
        onDestroy() {
          // 插件内部会自动处理
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coreManifest", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lobbyManifest", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Types.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b8068HpC1NAo7eUryX8SSWG", "Types", undefined);
      /**
       * 产品配置接口
       */
      /**
       * 版本清单接口
       */
      /**
       * Bundle 信息接口
       */
      /**
       * 文件信息接口
       */
      /**
       * 本地版本记录接口
       */
      /**
       * 本地单个 Bundle 版本信息
       */
      /**
       * Bundle 状态枚举
       */
      let BundleStatus = exports('BundleStatus', /*#__PURE__*/function (BundleStatus) {
        BundleStatus["None"] = "none";
        BundleStatus["Downloading"] = "downloading";
        BundleStatus["Ready"] = "ready";
        BundleStatus["Loaded"] = "loaded";
        return BundleStatus;
      }({}));

      /**
       * 更新计划接口
       */

      /**
       * 更新类型枚举
       */
      let UpdateType = exports('UpdateType', /*#__PURE__*/function (UpdateType) {
        UpdateType["None"] = "None";
        UpdateType["FirstDownload"] = "FirstDownload";
        UpdateType["DiffUpdate"] = "DiffUpdate";
        return UpdateType;
      }({}));

      /**
       * 进度回调函数
       */

      /**
       * 错误回调函数
       */
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});