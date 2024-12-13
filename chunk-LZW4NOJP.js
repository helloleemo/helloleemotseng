import{a as H}from"./chunk-W7CAD7VL.js";import{Ca as I,Ha as y,Nb as N,_ as v,a as l,aa as B,b as u,ca as p,cc as V,db as o,ib as C,ic as te,j as X,ka as U,la as c,lb as S,m as Y,ob as h,oc as ie,r as K,sa as Q,sc as ne,uc as O,vc as f,x as J,xa as w,yb as ee}from"./chunk-D2OXTAEC.js";var he=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(C),o(y))}}static{this.\u0275dir=c({type:i})}}return i})(),z=(()=>{class i extends he{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=w(i)))(r||i)}})()}static{this.\u0275dir=c({type:i,features:[h]})}}return i})(),R=new p("");var Ee={provide:R,useExisting:v(()=>fe),multi:!0};function Fe(){let i=H()?H().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var we=new p(""),fe=(()=>{class i extends he{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Fe())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(C),o(y),o(we,8))}}static{this.\u0275dir=c({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&N("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[V([Ee]),h]})}}return i})();var Ie=new p(""),Se=new p("");function pe(i){return i!=null}function ge(i){return te(i)?Y(i):i}function me(i){let e={};return i.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function _e(i,e){return e.map(t=>t(i))}function Ne(i){return!i.validate}function ve(i){return i.map(e=>Ne(e)?e:t=>e.validate(t))}function Oe(i){if(!i)return null;let e=i.filter(pe);return e.length==0?null:function(t){return me(_e(t,e))}}function ye(i){return i!=null?Oe(ve(i)):null}function xe(i){if(!i)return null;let e=i.filter(pe);return e.length==0?null:function(t){let n=_e(t,e).map(ge);return J(n).pipe(K(me))}}function Ce(i){return i!=null?xe(ve(i)):null}function re(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Pe(i){return i._rawValidators}function ke(i){return i._rawAsyncValidators}function L(i){return i?Array.isArray(i)?i:[i]:[]}function P(i,e){return Array.isArray(i)?i.includes(e):i===e}function se(i,e){let t=L(e);return L(i).forEach(r=>{P(t,r)||t.push(r)}),t}function oe(i,e){return L(e).filter(t=>!P(i,t))}var k=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ye(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ce(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},$=class extends k{get formDirective(){return null}get path(){return null}},E=class extends k{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ge={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ft=u(l({},Ge),{"[class.ng-submitted]":"isSubmitted"}),wt=(()=>{class i extends W{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(E,2))}}static{this.\u0275dir=c({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&ee("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[h]})}}return i})();var D="VALID",x="INVALID",g="PENDING",b="DISABLED",_=class{},G=class extends _{constructor(e,t){super(),this.value=e,this.source=t}},A=class extends _{constructor(e,t){super(),this.pristine=e,this.source=t}},M=class extends _{constructor(e,t){super(),this.touched=e,this.source=t}},m=class extends _{constructor(e,t){super(),this.status=e,this.source=t}};function Re(i){return(T(i)?i.validators:i)||null}function Te(i){return Array.isArray(i)?ye(i):i||null}function je(i,e){return(T(e)?e.asyncValidators:i)||null}function Be(i){return Array.isArray(i)?Ce(i):i||null}function T(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var q=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=O(()=>this.statusReactive()),this.statusReactive=S(void 0),this._pristine=O(()=>this.pristineReactive()),this.pristineReactive=S(!0),this._touched=O(()=>this.touchedReactive()),this.touchedReactive=S(!1),this._events=new X,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return f(this.statusReactive)}set status(e){f(()=>this.statusReactive.set(e))}get valid(){return this.status===D}get invalid(){return this.status===x}get pending(){return this.status==g}get disabled(){return this.status===b}get enabled(){return this.status!==b}get pristine(){return f(this.pristineReactive)}set pristine(e){f(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return f(this.touchedReactive)}set touched(e){f(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(se(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(se(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(oe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(oe(e,this._rawAsyncValidators))}hasValidator(e){return P(this._rawValidators,e)}hasAsyncValidator(e){return P(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new M(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new M(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new A(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new A(!0,n))}markAsPending(e={}){this.status=g;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new m(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=b,this.errors=null,this._forEachChild(r=>{r.disable(u(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,n)),this._events.next(new m(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(n=>{n.enable(u(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===g)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,t)),this._events.next(new m(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=g,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=ge(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new m(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(g)?g:this._anyControlsHaveStatus(x)?x:D}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new A(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new M(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){T(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Te(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Be(this._rawAsyncValidators)}};var Ve=new p("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";function Ue(i,e){return[...e.path,i]}function He(i,e,t=Z){$e(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),We(i,e),ze(i,e),qe(i,e),Le(i,e)}function ae(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Le(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function $e(i,e){let t=Pe(i);e.validator!==null?i.setValidators(re(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=ke(i);e.asyncValidator!==null?i.setAsyncValidators(re(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();ae(e._rawValidators,r),ae(e._rawAsyncValidators,r)}function We(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&De(i,e)})}function qe(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&De(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function De(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ze(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Ze(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Xe(i){return Object.getPrototypeOf(i.constructor)===z}function Ye(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===fe?t=s:Xe(s)?n=s:r=s}),r||n||t||null}function le(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function ue(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Ke=class extends q{constructor(e=null,t,n){super(Re(t),je(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){le(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){le(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Je={provide:E,useExisting:v(()=>Qe)},ce=Promise.resolve(),Qe=(()=>{class i extends E{constructor(t,n,r,s,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this.control=new Ke,this._registered=!1,this.name="",this.update=new I,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Ye(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ze(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){He(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ce.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&ne(n);ce.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ue(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(o($,9),o(Ie,10),o(Se,10),o(R,10),o(ie,8),o(Ve,8))}}static{this.\u0275dir=c({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[V([Je]),h,Q]})}}return i})();var et={provide:R,useExisting:v(()=>Ae),multi:!0};function be(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function tt(i){return i.split(":")[0]}var Ae=(()=>{class i extends z{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n=this._getOptionId(t),r=be(n,t);this.setProperty("value",r)}registerOnChange(t){this.onChange=n=>{this.value=this._getOptionValue(n),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),t))return n;return null}_getOptionValue(t){let n=tt(t);return this._optionMap.has(n)?this._optionMap.get(n):t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=w(i)))(r||i)}})()}static{this.\u0275dir=c({type:i,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,r){n&1&&N("change",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[V([et]),h]})}}return i})(),St=(()=>{class i{constructor(t,n,r){this._element=t,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(be(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(n){return new(n||i)(o(y),o(C),o(Ae,9))}}static{this.\u0275dir=c({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return i})(),it={provide:R,useExisting:v(()=>Me),multi:!0};function de(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function nt(i){return i.split(":")[0]}var Me=(()=>{class i extends z{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n;if(Array.isArray(t)){let r=t.map(s=>this._getOptionId(s));n=(s,a)=>{s._setSelected(r.indexOf(a.toString())>-1)}}else n=(r,s)=>{r._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(t){this.onChange=n=>{let r=[],s=n.selectedOptions;if(s!==void 0){let a=s;for(let d=0;d<a.length;d++){let F=a[d],j=this._getOptionValue(F.value);r.push(j)}}else{let a=n.options;for(let d=0;d<a.length;d++){let F=a[d];if(F.selected){let j=this._getOptionValue(F.value);r.push(j)}}}this.value=r,t(r)}}_registerOption(t){let n=(this._idCounter++).toString();return this._optionMap.set(n,t),n}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,t))return n;return null}_getOptionValue(t){let n=nt(t);return this._optionMap.has(n)?this._optionMap.get(n)._value:t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=w(i)))(r||i)}})()}static{this.\u0275dir=c({type:i,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,r){n&1&&N("change",function(a){return r.onChange(a.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[V([it]),h]})}}return i})(),Nt=(()=>{class i{constructor(t,n,r){this._element=t,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(de(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(de(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(n){return new(n||i)(o(y),o(C),o(Me,9))}}static{this.\u0275dir=c({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return i})();var rt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=U({type:i})}static{this.\u0275inj=B({})}}return i})();var Ot=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ve,useValue:t.callSetDisabledState??Z}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=U({type:i})}static{this.\u0275inj=B({imports:[rt]})}}return i})();export{wt as a,Qe as b,Ae as c,St as d,Nt as e,Ot as f};
