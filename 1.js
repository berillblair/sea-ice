(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,function(n,t,r){"use strict";r.r(t);var e=r(6),u=r(3);r.d(t,"__wbg_set_wasm",(function(){return u.u})),r.d(t,"make_game",(function(){return u.L})),r.d(t,"run",(function(){return u.M})),r.d(t,"drop_game",(function(){return u.I})),r.d(t,"drop_games",(function(){return u.J})),r.d(t,"get_statistics",(function(){return u.K})),r.d(t,"__wbindgen_string_new",(function(){return u.G})),r.d(t,"__wbg_new_abda76e883ba8a5f",(function(){return u.k})),r.d(t,"__wbg_stack_658279fe44541cf6",(function(){return u.v})),r.d(t,"__wbg_error_f851667af71bcfc6",(function(){return u.e})),r.d(t,"__wbindgen_object_drop_ref",(function(){return u.F})),r.d(t,"__wbg_crypto_c48a774b022d20ac",(function(){return u.d})),r.d(t,"__wbindgen_is_object",(function(){return u.A})),r.d(t,"__wbg_process_298734cf255a885d",(function(){return u.p})),r.d(t,"__wbg_versions_e2e78e134e3e5d01",(function(){return u.x})),r.d(t,"__wbg_node_1cd7a5d853dbea79",(function(){return u.o})),r.d(t,"__wbindgen_is_string",(function(){return u.B})),r.d(t,"__wbg_msCrypto_bcb970640f50a1e8",(function(){return u.i})),r.d(t,"__wbg_require_8f08ceecec0f4fee",(function(){return u.r})),r.d(t,"__wbindgen_is_function",(function(){return u.z})),r.d(t,"__wbg_randomFillSync_dc1e9a60c158336d",(function(){return u.q})),r.d(t,"__wbg_getRandomValues_37fa2ca9e4e07fab",(function(){return u.f})),r.d(t,"__wbg_newnoargs_581967eacc0e2604",(function(){return u.l})),r.d(t,"__wbg_call_cb65541d95d71282",(function(){return u.c})),r.d(t,"__wbindgen_object_clone_ref",(function(){return u.E})),r.d(t,"__wbg_self_1ff1d729e9aae938",(function(){return u.s})),r.d(t,"__wbg_window_5f4faef6c12b79ec",(function(){return u.y})),r.d(t,"__wbg_globalThis_1d39714405582d3c",(function(){return u.g})),r.d(t,"__wbg_global_651f05c6a0944d1c",(function(){return u.h})),r.d(t,"__wbindgen_is_undefined",(function(){return u.C})),r.d(t,"__wbg_call_01734de55d61e11d",(function(){return u.b})),r.d(t,"__wbg_buffer_085ec1f694018c4f",(function(){return u.a})),r.d(t,"__wbg_newwithbyteoffsetandlength_6da8e527659b86aa",(function(){return u.m})),r.d(t,"__wbg_new_8125e318e6245eed",(function(){return u.j})),r.d(t,"__wbg_set_5cf90238115182c3",(function(){return u.t})),r.d(t,"__wbg_newwithlength_e5d69174d6984cd7",(function(){return u.n})),r.d(t,"__wbg_subarray_13db269f57aa838d",(function(){return u.w})),r.d(t,"__wbindgen_throw",(function(){return u.H})),r.d(t,"__wbindgen_memory",(function(){return u.D})),Object(u.u)(e)},function(n,t,r){"use strict";(function(n,e){let u;function o(n){u=n}r.d(t,"u",(function(){return o})),r.d(t,"L",(function(){return h})),r.d(t,"M",(function(){return m})),r.d(t,"I",(function(){return j})),r.d(t,"J",(function(){return x})),r.d(t,"K",(function(){return A})),r.d(t,"G",(function(){return E})),r.d(t,"k",(function(){return q})),r.d(t,"v",(function(){return F})),r.d(t,"e",(function(){return O})),r.d(t,"F",(function(){return C})),r.d(t,"d",(function(){return D})),r.d(t,"A",(function(){return I})),r.d(t,"p",(function(){return P})),r.d(t,"x",(function(){return J})),r.d(t,"o",(function(){return L})),r.d(t,"B",(function(){return U})),r.d(t,"i",(function(){return B})),r.d(t,"r",(function(){return M})),r.d(t,"z",(function(){return z})),r.d(t,"q",(function(){return G})),r.d(t,"f",(function(){return H})),r.d(t,"l",(function(){return K})),r.d(t,"c",(function(){return R})),r.d(t,"E",(function(){return S})),r.d(t,"s",(function(){return V})),r.d(t,"y",(function(){return N})),r.d(t,"g",(function(){return Q})),r.d(t,"h",(function(){return W})),r.d(t,"C",(function(){return X})),r.d(t,"b",(function(){return Y})),r.d(t,"a",(function(){return Z})),r.d(t,"m",(function(){return $})),r.d(t,"j",(function(){return nn})),r.d(t,"t",(function(){return tn})),r.d(t,"n",(function(){return rn})),r.d(t,"w",(function(){return en})),r.d(t,"H",(function(){return un})),r.d(t,"D",(function(){return on}));let c=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let i=null;function f(){return null!==i&&0!==i.byteLength||(i=new Uint8Array(u.memory.buffer)),i}function _(n,t){return n>>>=0,c.decode(f().subarray(n,n+t))}const d=new Array(128).fill(void 0);d.push(void 0,null,!0,!1);let a=d.length;function l(n){a===d.length&&d.push(d.length+1);const t=a;return a=d[t],d[t]=n,t}function b(n){return d[n]}function w(n){const t=b(n);return function(n){n<132||(d[n]=a,a=n)}(n),t}let s=0;let g=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const y="function"==typeof g.encodeInto?function(n,t){return g.encodeInto(n,t)}:function(n,t){const r=g.encode(n);return t.set(r),{read:n.length,written:r.length}};function p(n,t,r){if(void 0===r){const r=g.encode(n),e=t(r.length,1)>>>0;return f().subarray(e,e+r.length).set(r),s=r.length,e}let e=n.length,u=t(e,1)>>>0;const o=f();let c=0;for(;c<e;c++){const t=n.charCodeAt(c);if(t>127)break;o[u+c]=t}if(c!==e){0!==c&&(n=n.slice(c)),u=r(u,e,e=c+3*n.length,1)>>>0;const t=f().subarray(u+c,u+e);c+=y(n,t).written}return s=c,u}function h(n,t,r,e,o,c,i,f,_){const d=p(n,u.__wbindgen_malloc,u.__wbindgen_realloc),a=s;return u.make_game(d,a,t,r,e,o,c,i,f,_)>>>0}function m(n){u.run(n)}let k=null;function v(){return null!==k&&0!==k.byteLength||(k=new Int32Array(u.memory.buffer)),k}function j(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16);u.drop_game(c,n);var e=v()[c/4+0],o=v()[c/4+1];return t=e,r=o,_(e,o)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(t,r,1)}}function x(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16),i=p(n,u.__wbindgen_malloc,u.__wbindgen_realloc),f=s;u.drop_games(c,i,f);var e=v()[c/4+0],o=v()[c/4+1];return t=e,r=o,_(e,o)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(t,r,1)}}function A(n){return w(u.get_statistics(n))}function T(n,t){try{return n.apply(this,t)}catch(n){u.__wbindgen_exn_store(l(n))}}function E(n,t){return l(_(n,t))}function q(){return l(new Error)}function F(n,t){const r=p(b(t).stack,u.__wbindgen_malloc,u.__wbindgen_realloc),e=s;v()[n/4+1]=e,v()[n/4+0]=r}function O(n,t){let r,e;try{r=n,e=t,console.error(_(n,t))}finally{u.__wbindgen_free(r,e,1)}}function C(n){w(n)}function D(n){return l(b(n).crypto)}function I(n){const t=b(n);return"object"==typeof t&&null!==t}function P(n){return l(b(n).process)}function J(n){return l(b(n).versions)}function L(n){return l(b(n).node)}function U(n){return"string"==typeof b(n)}function B(n){return l(b(n).msCrypto)}function M(){return T((function(){return l(n.require)}),arguments)}function z(n){return"function"==typeof b(n)}function G(){return T((function(n,t){b(n).randomFillSync(w(t))}),arguments)}function H(){return T((function(n,t){b(n).getRandomValues(b(t))}),arguments)}function K(n,t){return l(new Function(_(n,t)))}function R(){return T((function(n,t){return l(b(n).call(b(t)))}),arguments)}function S(n){return l(b(n))}function V(){return T((function(){return l(self.self)}),arguments)}function N(){return T((function(){return l(window.window)}),arguments)}function Q(){return T((function(){return l(globalThis.globalThis)}),arguments)}function W(){return T((function(){return l(e.global)}),arguments)}function X(n){return void 0===b(n)}function Y(){return T((function(n,t,r){return l(b(n).call(b(t),b(r)))}),arguments)}function Z(n){return l(b(n).buffer)}function $(n,t,r){return l(new Uint8Array(b(n),t>>>0,r>>>0))}function nn(n){return l(new Uint8Array(b(n)))}function tn(n,t,r){b(n).set(b(t),r>>>0)}function rn(n){return l(new Uint8Array(n>>>0))}function en(n,t,r){return l(b(n).subarray(t>>>0,r>>>0))}function un(n,t){throw new Error(_(n,t))}function on(){return l(u.memory)}}).call(this,r(4)(n),r(5))},function(n,t){n.exports=function(n){if(!n.webpackPolyfill){var t=Object.create(n);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(n,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}n.exports=r},function(n,t,r){"use strict";var e=r.w[n.i];for(var u in r.r(t),e)"__webpack_init__"!=u&&(t[u]=e[u]);r(3);e.__webpack_init__()}]]);