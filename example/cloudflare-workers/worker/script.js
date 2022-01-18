!(function (t) {
  var e = {}
  function r(o) {
    if (e[o]) return e[o].exports
    var n = (e[o] = { i: o, l: !1, exports: {} })
    return t[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
  }
  ;(r.m = t),
    (r.c = e),
    (r.d = function (t, e, o) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 })
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t
      if (4 & e && "object" == typeof t && t && t.__esModule) return t
      var o = Object.create(null)
      if (
        (r.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          r.d(
            o,
            n,
            function (e) {
              return t[e]
            }.bind(null, n),
          )
      return o
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return r.d(e, "a", e), e
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.p = ""),
    r((r.s = 2))
})([
  function (t, e, r) {
    r(1), (t.exports = self.fetch.bind(self))
  },
  function (t, e, r) {
    "use strict"
    r.r(e),
      r.d(e, "Headers", function () {
        return p
      }),
      r.d(e, "Request", function () {
        return A
      }),
      r.d(e, "Response", function () {
        return T
      }),
      r.d(e, "DOMException", function () {
        return E
      }),
      r.d(e, "fetch", function () {
        return P
      })
    var o =
        ("undefined" != typeof globalThis && globalThis) ||
        ("undefined" != typeof self && self) ||
        (void 0 !== o && o),
      n = "URLSearchParams" in o,
      s = "Symbol" in o && "iterator" in Symbol,
      i =
        "FileReader" in o &&
        "Blob" in o &&
        (function () {
          try {
            return new Blob(), !0
          } catch (t) {
            return !1
          }
        })(),
      a = "FormData" in o,
      u = "ArrayBuffer" in o
    if (u)
      var c = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]",
        ],
        h =
          ArrayBuffer.isView ||
          function (t) {
            return t && c.indexOf(Object.prototype.toString.call(t)) > -1
          }
    function f(t) {
      if (
        ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
      )
        throw new TypeError('Invalid character in header field name: "' + t + '"')
      return t.toLowerCase()
    }
    function l(t) {
      return "string" != typeof t && (t = String(t)), t
    }
    function d(t) {
      var e = {
        next: function () {
          var e = t.shift()
          return { done: void 0 === e, value: e }
        },
      }
      return (
        s &&
          (e[Symbol.iterator] = function () {
            return e
          }),
        e
      )
    }
    function p(t) {
      ;(this.map = {}),
        t instanceof p
          ? t.forEach(function (t, e) {
              this.append(e, t)
            }, this)
          : Array.isArray(t)
          ? t.forEach(function (t) {
              this.append(t[0], t[1])
            }, this)
          : t &&
            Object.getOwnPropertyNames(t).forEach(function (e) {
              this.append(e, t[e])
            }, this)
    }
    function y(t) {
      if (t.bodyUsed) return Promise.reject(new TypeError("Already read"))
      t.bodyUsed = !0
    }
    function b(t) {
      return new Promise(function (e, r) {
        ;(t.onload = function () {
          e(t.result)
        }),
          (t.onerror = function () {
            r(t.error)
          })
      })
    }
    function m(t) {
      var e = new FileReader(),
        r = b(e)
      return e.readAsArrayBuffer(t), r
    }
    function w(t) {
      if (t.slice) return t.slice(0)
      var e = new Uint8Array(t.byteLength)
      return e.set(new Uint8Array(t)), e.buffer
    }
    function v() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function (t) {
          var e
          ;(this.bodyUsed = this.bodyUsed),
            (this._bodyInit = t),
            t
              ? "string" == typeof t
                ? (this._bodyText = t)
                : i && Blob.prototype.isPrototypeOf(t)
                ? (this._bodyBlob = t)
                : a && FormData.prototype.isPrototypeOf(t)
                ? (this._bodyFormData = t)
                : n && URLSearchParams.prototype.isPrototypeOf(t)
                ? (this._bodyText = t.toString())
                : u && i && (e = t) && DataView.prototype.isPrototypeOf(e)
                ? ((this._bodyArrayBuffer = w(t.buffer)),
                  (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                : u && (ArrayBuffer.prototype.isPrototypeOf(t) || h(t))
                ? (this._bodyArrayBuffer = w(t))
                : (this._bodyText = t = Object.prototype.toString.call(t))
              : (this._bodyText = ""),
            this.headers.get("content-type") ||
              ("string" == typeof t
                ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set("content-type", this._bodyBlob.type)
                : n &&
                  URLSearchParams.prototype.isPrototypeOf(t) &&
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8",
                  ))
        }),
        i &&
          ((this.blob = function () {
            var t = y(this)
            if (t) return t
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]))
            if (this._bodyFormData) throw new Error("could not read FormData body as blob")
            return Promise.resolve(new Blob([this._bodyText]))
          }),
          (this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              var t = y(this)
              return (
                t ||
                (ArrayBuffer.isView(this._bodyArrayBuffer)
                  ? Promise.resolve(
                      this._bodyArrayBuffer.buffer.slice(
                        this._bodyArrayBuffer.byteOffset,
                        this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength,
                      ),
                    )
                  : Promise.resolve(this._bodyArrayBuffer))
              )
            }
            return this.blob().then(m)
          })),
        (this.text = function () {
          var t,
            e,
            r,
            o = y(this)
          if (o) return o
          if (this._bodyBlob)
            return (t = this._bodyBlob), (e = new FileReader()), (r = b(e)), e.readAsText(t), r
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function (t) {
                for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++)
                  r[o] = String.fromCharCode(e[o])
                return r.join("")
              })(this._bodyArrayBuffer),
            )
          if (this._bodyFormData) throw new Error("could not read FormData body as text")
          return Promise.resolve(this._bodyText)
        }),
        a &&
          (this.formData = function () {
            return this.text().then(_)
          }),
        (this.json = function () {
          return this.text().then(JSON.parse)
        }),
        this
      )
    }
    ;(p.prototype.append = function (t, e) {
      ;(t = f(t)), (e = l(e))
      var r = this.map[t]
      this.map[t] = r ? r + ", " + e : e
    }),
      (p.prototype.delete = function (t) {
        delete this.map[f(t)]
      }),
      (p.prototype.get = function (t) {
        return (t = f(t)), this.has(t) ? this.map[t] : null
      }),
      (p.prototype.has = function (t) {
        return this.map.hasOwnProperty(f(t))
      }),
      (p.prototype.set = function (t, e) {
        this.map[f(t)] = l(e)
      }),
      (p.prototype.forEach = function (t, e) {
        for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
      }),
      (p.prototype.keys = function () {
        var t = []
        return (
          this.forEach(function (e, r) {
            t.push(r)
          }),
          d(t)
        )
      }),
      (p.prototype.values = function () {
        var t = []
        return (
          this.forEach(function (e) {
            t.push(e)
          }),
          d(t)
        )
      }),
      (p.prototype.entries = function () {
        var t = []
        return (
          this.forEach(function (e, r) {
            t.push([r, e])
          }),
          d(t)
        )
      }),
      s && (p.prototype[Symbol.iterator] = p.prototype.entries)
    var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]
    function A(t, e) {
      if (!(this instanceof A))
        throw new TypeError(
          'Please use the "new" operator, this DOM object constructor cannot be called as a function.',
        )
      var r,
        o,
        n = (e = e || {}).body
      if (t instanceof A) {
        if (t.bodyUsed) throw new TypeError("Already read")
        ;(this.url = t.url),
          (this.credentials = t.credentials),
          e.headers || (this.headers = new p(t.headers)),
          (this.method = t.method),
          (this.mode = t.mode),
          (this.signal = t.signal),
          n || null == t._bodyInit || ((n = t._bodyInit), (t.bodyUsed = !0))
      } else this.url = String(t)
      if (
        ((this.credentials = e.credentials || this.credentials || "same-origin"),
        (!e.headers && this.headers) || (this.headers = new p(e.headers)),
        (this.method =
          ((r = e.method || this.method || "GET"),
          (o = r.toUpperCase()),
          g.indexOf(o) > -1 ? o : r)),
        (this.mode = e.mode || this.mode || null),
        (this.signal = e.signal || this.signal),
        (this.referrer = null),
        ("GET" === this.method || "HEAD" === this.method) && n)
      )
        throw new TypeError("Body not allowed for GET or HEAD requests")
      if (
        (this._initBody(n),
        !(
          ("GET" !== this.method && "HEAD" !== this.method) ||
          ("no-store" !== e.cache && "no-cache" !== e.cache)
        ))
      ) {
        var s = /([?&])_=[^&]*/
        if (s.test(this.url)) this.url = this.url.replace(s, "$1_=" + new Date().getTime())
        else {
          this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
        }
      }
    }
    function _(t) {
      var e = new FormData()
      return (
        t
          .trim()
          .split("&")
          .forEach(function (t) {
            if (t) {
              var r = t.split("="),
                o = r.shift().replace(/\+/g, " "),
                n = r.join("=").replace(/\+/g, " ")
              e.append(decodeURIComponent(o), decodeURIComponent(n))
            }
          }),
        e
      )
    }
    function T(t, e) {
      if (!(this instanceof T))
        throw new TypeError(
          'Please use the "new" operator, this DOM object constructor cannot be called as a function.',
        )
      e || (e = {}),
        (this.type = "default"),
        (this.status = void 0 === e.status ? 200 : e.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.statusText = void 0 === e.statusText ? "" : "" + e.statusText),
        (this.headers = new p(e.headers)),
        (this.url = e.url || ""),
        this._initBody(t)
    }
    ;(A.prototype.clone = function () {
      return new A(this, { body: this._bodyInit })
    }),
      v.call(A.prototype),
      v.call(T.prototype),
      (T.prototype.clone = function () {
        return new T(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new p(this.headers),
          url: this.url,
        })
      }),
      (T.error = function () {
        var t = new T(null, { status: 0, statusText: "" })
        return (t.type = "error"), t
      })
    var O = [301, 302, 303, 307, 308]
    T.redirect = function (t, e) {
      if (-1 === O.indexOf(e)) throw new RangeError("Invalid status code")
      return new T(null, { status: e, headers: { location: t } })
    }
    var E = o.DOMException
    try {
      new E()
    } catch (t) {
      ;((E = function (t, e) {
        ;(this.message = t), (this.name = e)
        var r = Error(t)
        this.stack = r.stack
      }).prototype = Object.create(Error.prototype)),
        (E.prototype.constructor = E)
    }
    function P(t, e) {
      return new Promise(function (r, n) {
        var s = new A(t, e)
        if (s.signal && s.signal.aborted) return n(new E("Aborted", "AbortError"))
        var a = new XMLHttpRequest()
        function c() {
          a.abort()
        }
        ;(a.onload = function () {
          var t,
            e,
            o = {
              status: a.status,
              statusText: a.statusText,
              headers:
                ((t = a.getAllResponseHeaders() || ""),
                (e = new p()),
                t
                  .replace(/\r?\n[\t ]+/g, " ")
                  .split("\r")
                  .map(function (t) {
                    return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                  })
                  .forEach(function (t) {
                    var r = t.split(":"),
                      o = r.shift().trim()
                    if (o) {
                      var n = r.join(":").trim()
                      e.append(o, n)
                    }
                  }),
                e),
            }
          o.url = "responseURL" in a ? a.responseURL : o.headers.get("X-Request-URL")
          var n = "response" in a ? a.response : a.responseText
          setTimeout(function () {
            r(new T(n, o))
          }, 0)
        }),
          (a.onerror = function () {
            setTimeout(function () {
              n(new TypeError("Network request failed"))
            }, 0)
          }),
          (a.ontimeout = function () {
            setTimeout(function () {
              n(new TypeError("Network request failed"))
            }, 0)
          }),
          (a.onabort = function () {
            setTimeout(function () {
              n(new E("Aborted", "AbortError"))
            }, 0)
          }),
          a.open(
            s.method,
            (function (t) {
              try {
                return "" === t && o.location.href ? o.location.href : t
              } catch (e) {
                return t
              }
            })(s.url),
            !0,
          ),
          "include" === s.credentials
            ? (a.withCredentials = !0)
            : "omit" === s.credentials && (a.withCredentials = !1),
          "responseType" in a &&
            (i
              ? (a.responseType = "blob")
              : u &&
                s.headers.get("Content-Type") &&
                -1 !== s.headers.get("Content-Type").indexOf("application/octet-stream") &&
                (a.responseType = "arraybuffer")),
          !e || "object" != typeof e.headers || e.headers instanceof p
            ? s.headers.forEach(function (t, e) {
                a.setRequestHeader(e, t)
              })
            : Object.getOwnPropertyNames(e.headers).forEach(function (t) {
                a.setRequestHeader(t, l(e.headers[t]))
              }),
          s.signal &&
            (s.signal.addEventListener("abort", c),
            (a.onreadystatechange = function () {
              4 === a.readyState && s.signal.removeEventListener("abort", c)
            })),
          a.send(void 0 === s._bodyInit ? null : s._bodyInit)
      })
    }
    ;(P.polyfill = !0),
      o.fetch || ((o.fetch = P), (o.Headers = p), (o.Request = A), (o.Response = T))
  },
  function (t, e, r) {
    "use strict"
    r.r(e)
    r(0)
    var o = Object.defineProperty,
      n = Object.defineProperties,
      s = Object.getOwnPropertyDescriptors,
      i = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable,
      c = (t, e, r) =>
        e in t ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r),
      h = (t, e) => {
        for (var r in e || (e = {})) a.call(e, r) && c(t, r, e[r])
        if (i) for (var r of i(e)) u.call(e, r) && c(t, r, e[r])
        return t
      },
      f = class extends Error {
        constructor(t) {
          super(t.error),
            (this.name = "UpstashError"),
            (this.result = t.result),
            (this.error = t.error),
            (this.status = t.status)
        }
      }
    function l(t) {
      const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        r = t.length - 1
      let o = -1,
        n = ""
      for (; o < r; ) {
        const r = (t.charCodeAt(++o) << 16) | (t.charCodeAt(++o) << 8) | t.charCodeAt(++o)
        n += e[(r >>> 18) & 63] + e[(r >>> 12) & 63] + e[(r >>> 6) & 63] + e[63 & r]
      }
      var s = t.length % 3
      if (s > 0) for (n = n.slice(0, s - 3); n.length % 4 != 0; ) n += "="
      return n
    }
    addEventListener("fetch", (t) => {
      t.respondWith(
        (async function (t) {
          const e = new (class {
              constructor(t) {
                this.client = new (class {
                  constructor(t) {
                    var e
                    ;(this.baseUrl = t.baseUrl.replace(/\/$/, "")),
                      (this.headers = null != (e = t.headers) ? e : {})
                  }
                  async request(t, e) {
                    var r
                    const o = h(h({ "Content-Type": "application/json" }, this.headers), e.headers)
                    let n = new Error()
                    for (let s = 0; s <= (null != (r = e.retries) ? r : 5); s++) {
                      s > 0 && (await new Promise((t) => setTimeout(t, 2 ** s * 250)))
                      try {
                        const r = await fetch([this.baseUrl, ...e.path].join("/"), {
                            method: t,
                            headers: o,
                            body: JSON.stringify(e.body),
                          }),
                          n = await r.json()
                        if (!r.ok) throw new f(n)
                        return n
                      } catch (t) {
                        n = t
                      }
                    }
                    throw n
                  }
                  async get(t) {
                    return await this.request("GET", t)
                  }
                  async post(t) {
                    return await this.request("POST", t)
                  }
                })({
                  baseUrl: t.url,
                  headers: { authorization: "Basic " + l(`${t.username}:${t.password}`) },
                })
              }
              producer() {
                return new (class {
                  constructor(t) {
                    this.client = t
                  }
                  async produce(t, e, r) {
                    const o = h(
                      { topic: t, value: "string" == typeof e ? e : JSON.stringify(e) },
                      r,
                    )
                    return (await this.client.post({ path: ["produce"], body: o }))[0]
                  }
                  async produceMany(t) {
                    return await this.client.post({ path: ["produce"], body: t })
                  }
                })(this.client)
              }
              consumer() {
                return new (class {
                  constructor(t) {
                    this.client = t
                  }
                  async fetch(t, e = { parallel: !0 }) {
                    var r
                    let o = [t]
                    ;(null == e ? void 0 : e.parallel) &&
                      ((o = (null != (r = t.topicPartitionOffsets) ? r : []).map((e) => {
                        return (r = h({}, e)), (o = { timeout: t.timeout }), n(r, s(o))
                        var r, o
                      })),
                      t.topic &&
                        o.push({
                          topic: t.topic,
                          partition: t.partition,
                          offset: t.offset,
                          timeout: t.timeout,
                        }))
                    return (
                      await Promise.all(
                        o.map(async (t) => await this.client.post({ path: ["fetch"], body: t })),
                      )
                    ).flat()
                  }
                  async consume(t) {
                    const e = {}
                    1 === t.topics.length ? (e.topic = t.topics[0]) : (e.topics = t.topics),
                      "number" == typeof t.timeout && (e.timeout = t.timeout)
                    const r = {}
                    return (
                      "boolean" == typeof t.autoCommit &&
                        (r["Kafka-Enable-Auto-Commit"] = t.autoCommit.toString()),
                      "number" == typeof t.autoCommitInterval &&
                        (r["Kafka-Auto-Commit-Interval"] = t.autoCommitInterval.toString()),
                      "string" == typeof t.autoOffsetReset &&
                        (r["Kafka-Auto-Offset-Reset"] = t.autoOffsetReset),
                      await this.client.post({
                        path: ["consume", t.consumerGroupId, t.instanceId],
                        headers: r,
                        body: e,
                      })
                    )
                  }
                  async commit(t) {
                    return await this.client.post({
                      path: ["commit", t.consumerGroupId, t.instanceId],
                      body: t.offset,
                    })
                  }
                  async committed(t) {
                    return await this.client.post({
                      path: ["committed", t.consumerGroupId, t.instanceId],
                      body: t.topicPartitions,
                    })
                  }
                })(this.client)
              }
              admin() {
                return new (class {
                  constructor(t) {
                    this.client = t
                  }
                  async topics() {
                    return await this.client.get({ path: ["topics"] })
                  }
                  async consumers() {
                    return await this.client.get({ path: ["consumers"] })
                  }
                  async removeConsumerInstance(t, e) {
                    await this.client.post({ path: ["delete-consumer", t, e] })
                  }
                })(this.client)
              }
            })({
              url: UPSTASH_KAFKA_REST_URL,
              username: UPSTASH_KAFKA_REST_USERNAME,
              password: UPSTASH_KAFKA_REST_PASSWORD,
            }),
            r = e.producer(),
            o = e.consumer()
          await r.produce("a", "Hello World")
          const i = await o.consume({
            consumerGroupId: "group_1",
            instanceId: "instance_1",
            topics: ["a"],
            autoOffsetReset: "earliest",
          })
          return new Response(JSON.stringify(i), { headers: { "content-type": "text/plain" } })
        })(t.request),
      )
    })
  },
])
