!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Atomic=e():t.Atomic=e()}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}([function(t,e){function i(t,e){this.x=t||0,this.y=e||0}i.dist=function(t,e){return t.dist(e)},i.sub=function(t,e){return new i(t.x-e.x,t.y-e.y)},i.add=function(t,e){return new i(t.x+e.x,t.y+e.y)},i.fromAngle=function(t){let e=new i(0,0);return e.x=Math.cos(t),e.y=Math.sin(t),e},i.random2D=function(t){return i.fromAngle(Math.random()*Math.PI*180)},i.prototype={set:function(t,e){return this.x=t,this.y=e,this},add:function(t,e){return 1===arguments.length?(this.x+=t.x,this.y+=t.y):2===arguments.length&&(this.x+=t,this.y+=e),this},sub:function(t,e){return t instanceof i?(this.x-=t.x,this.y-=t.y):(this.x-=t,this.y-=e),this},sub2:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this},mult:function(t){return"number"==typeof t?(this.x*=t,this.y*=t):(this.x*=t.x,this.y*=t.y),this},div:function(t){return"number"==typeof t?(this.x/=t,this.y/=t):(this.x/=t.x,this.y/=t.y),this},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},magSq:function(){return this.x*this.x+this.y*this.y},setMag:function(t){return this.normalize(),this.mult(t),this},normalize:function(){let t=this.mag();return t>0&&this.div(t),this},limit:function(t){return this.mag()>t&&(this.normalize(),this.mult(t)),this},heading:function(){return-Math.atan2(-this.y,this.x)},dist:function(t){let e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)},copy:function(){return new i(this.x,this.y)},negative:function(){return this.x=-this.x,this.y=-this.y,this},array:function(){return[this.x,this.y]},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},unit:function(){return this.div(this.mag())},subtract:function(t){return new i(this.x-t,this.y-t)},dot:function(t){return this.x*t.x+this.y*t.y},scale:function(t,e){return this.x=t.x*e,this.y=t.y*e,this},normal:function(t,e){var i=t.y-e.y,s=e.x-t.x,n=1/Math.sqrt(i*i+s*s);return this.x=i*n,this.y=s*n,this},copy:function(t){return this.x=t.x,this.y=t.y,this},squareDist:function(t){var e=this.x-t.x,i=this.y-t.y;return e*e+i*i},perp:function(t){return this.x=-t.y,this.y=t.x,this}},t.exports=i},function(t,e,i){const s=i(0);function n(t,e,i,n){this.opt=n,this.parent=t,this.position=new s(e.x,e.y),this.oldPosition=new s(e.x,e.y),this.pinned=i}n.prototype.integrate=function(){if(!this.pinned){let t=this.position,e=this.oldPosition,i=t.x,s=t.y;t.x+=(t.x-e.x)*this.opt.friction,t.y+=(t.y-e.y)*this.opt.friction+this.opt.gravity,e.set(i,s)}},n.prototype.boundary=function(){let t=this.position,e=this.oldPosition,i=t.x-e.x;t.y,e.y;t.y<0?t.y=0:t.y>this.opt.canvas.height&&(t.x-=(t.y-this.opt.canvas.height)*i*this.opt.groundFriction,t.y=this.opt.canvas.height),t.x<0?t.x=0:t.x>this.opt.canvas.width&&(t.x=this.opt.canvas.width)},t.exports=n},function(t,e){function i(t,e,i,s){this.parent=t,this.v0=e,this.v1=i,this.p0=e.position,this.p1=i.position,this.edge=s,this.dist=Math.sqrt(this.p0.squareDist(this.p1))}i.prototype.solve=function(){let t=this.p1.x-this.p0.x,e=this.p1.y-this.p0.y,i=Math.sqrt(t*t+e*e);const s=(i-this.dist)/i,n=.5*t*s,o=.5*e*s;this.p0.x+=n,this.p0.y+=o,this.p1.x-=n,this.p1.y-=o},t.exports=i},function(t,e,i){const s=i(0);function n(){this.testAxis=new s(0,0),this.response=new s(0,0),this.relTanVel=new s(0,0),this.tangent=new s(0,0),this.relVel=new s(0,0),this.center=new s(0,0),this.axis=new s(0,0),this.line=new s(0,0),this.depth=0,this.edge=null,this.vertex=null}n.prototype.SAT=function(t,e){this.checkAABB(e,t);let i=Number.MAX_SAFE_INTEGER;const s=t.edges.length;for(let n=0,o=s+e.edges.length;n<o;n++){let o=n<s?t.edges[n]:e.edges[n-s];this.testAxis.normal(o.p0,o.p1),t.project(this.testAxis),e.project(this.testAxis);const r=t.min<e.min?e.min-t.max:t.min-e.max;if(r>0)return!1;Math.abs(r)<i&&(i=Math.abs(r),this.axis.copy(this.testAxis),this.edge=o)}if(this.depth=i,this.edge.parent!=e){const i=e;e=t,t=i}const n=t.center.x-e.center.x,o=t.center.y-e.center.y;this.axis.x*n+this.axis.y*o<0&&this.axis.negative();let r,h,l=Number.MAX_SAFE_INTEGER;for(let i=0;i<t.vCount;i++)r=t.vertices[i],this.line.sub2(r.position,e.center),(h=this.axis.dot(this.line))<l&&(l=h,this.vertex=r);return!0},n.prototype.checkAABB=function(t,e){if(!(0>Math.abs(t.center.x-e.center.x)-(t.halfEx.x+e.halfEx.x)&&0>Math.abs(t.center.y-e.center.y)-(t.halfEx.y+e.halfEx.y)))return!1},n.prototype.resolve=function(t){let e=this.edge.p0,i=this.edge.p1,s=this.edge.v0.oldPosition,n=this.edge.v1.oldPosition,o=this.vertex.position,r=this.vertex.oldPosition,h=this.response;this.response.scale(this.axis,this.depth);let l=Math.abs(e.x-i.x)>Math.abs(e.y-i.y)?(o.x-h.x-e.x)/(i.x-e.x):(o.y-h.y-e.y)/(i.y-e.y),c=1/(l*l+(1-l)*(1-l)),a=this.vertex.parent.mass,f=this.edge.parent.mass,p=a+f;a/=p,f/=p,e.x-=h.x*(1-l)*c*a,e.y-=h.y*(1-l)*c*a,i.x-=h.x*l*c*a,i.y-=h.y*l*c*a,o.x+=h.x*f,o.y+=h.y*f,this.relVel.set(o.x-r.x-.5*(e.x+i.x-s.x-n.x),o.y-r.y-.5*(e.y+i.y-s.y-n.y)),this.tangent.perp(this.axis);let x=this.relVel.dot(this.tangent),u=this.relTanVel.set(this.tangent.x*x,this.tangent.y*x);r.x+=.95*u.x*f,r.y+=.95*u.y*f,s.x-=u.x*(1-l)*.95*c*a,s.y-=u.y*(1-l)*.95*c*a,n.x-=u.x*l*.95*c*a,n.y-=u.y*l*.95*c*a},n.prototype.aabb=function(t,e){return t.bound.minX<=e.bound.maxX&&t.bound.minY<=e.bound.maxY&&t.bound.maxX>=e.bound.minX&&e.bound.maxY>=t.bound.minY},t.exports=n},function(t,e,i){const s=i(0),n=i(2),o=i(1);function r(t,e){if(this.vCount=0,this.eCount=0,this.min=0,this.max=0,this.vertices=[],this.positions=[],this.edges=[],this.bound={},this.center=new s(0,0),this.halfEx=new s(0,0),this.engine=e,this.render=t.render||{fillStyle:"black"},this.mass=void 0==t.mass?1:t.mass,this.static=t.static||!1,this.angle=t.angle||0,this.static&&(this.mass=Number.MAX_SAFE_INTEGER),"string"==typeof t.vertices){let e=t.vertices.split(" "),i={};for(let t=0;t<e.length;t++)i[t]={x:Number(e[t].split(",")[0]),y:Number(e[t].split(",")[1])};t.vertices=i}for(let e in t.vertices){let i=new o(this,t.vertices[e],this.static,{friction:this.engine.friction,gravity:this.engine.gravity,canvas:this.engine.canvas,groundFriction:this.engine.groundFriction});t.vertices[e].compiled=i,this.vertices.push(i),this.positions.push(i.position),this.engine.vertices.push(i),this.vCount++}for(let e=0;e<t.constraints.length;e++){let i=t.constraints[e],s=new n(this,t.vertices[i[0]].compiled,t.vertices[i[1]].compiled,i[2]||!1);s.edge&&(this.edges.push(s),this.eCount++),this.engine.constraints.push(s)}if(0!==this.angle)for(let t=0;t<this.vertices.length;t++){let e=this.angle/180*Math.PI;this.calculateCenter(),this.vertices[t].position.x=this.vertices[t].position.x*Math.cos(e)-this.vertices[t].position.y*Math.sin(e),this.vertices[t].position.y=this.vertices[t].position.x*Math.sin(e)+this.vertices[t].position.y*Math.cos(e),this.vertices[t].oldPosition.x=this.vertices[t].position.x,this.vertices[t].oldPosition.y=this.vertices[t].position.y}}r.prototype.calculateCenter=function(){let t=Number.MAX_SAFE_INTEGER,e=Number.MAX_SAFE_INTEGER,i=-Number.MAX_SAFE_INTEGER,s=-Number.MAX_SAFE_INTEGER;for(let n=0;n<this.vertices.length;n++){let o=this.positions[n];o.x>i&&(i=o.x),o.y>s&&(s=o.y),o.x<t&&(t=o.x),o.y<e&&(e=o.y)}this.center.set(.5*(t+i),.5*(e+s)),this.halfEx.set(.5*(i-t),.5*(s-e)),this.bound={minX:t,minY:e,maxX:i,maxY:s}},r.prototype.project=function(t){function e(t,e){return t.x*e.x+t.y*e.y}let i=e(this.vertices[0].position,t),s=max=i;for(let n=0;n<this.vertices.length;n++){(i=e(this.vertices[n].position,t))<s&&(s=i),i>max&&(max=i)}this.min=s,this.max=max},r.prototype.draw=function(){this.engine.ctx.beginPath();let t=this.edges[0].p0;for(let t in this.render)this.render.hasOwnProperty(t)&&(this.engine.ctx[t]=this.render[t]);this.engine.ctx.fillStyle=this.render.fillStyle,this.engine.ctx.moveTo(t.x,t.y);for(let e=1;e<this.edges.length;e++)t=this.edges[e].p0,this.engine.ctx.lineTo(t.x,t.y);this.render.strokeStyle&&this.engine.ctx.stroke(),this.engine.ctx.fill(),this.engine.ctx.closePath()},r.prototype.drag=function(){if(this.engine.pointer.isDown&&!this.engine.dragVertex&&this.engine.ctx.isPointInPath(this.engine.pointer.x,this.engine.pointer.y)){let t=99999;for(let e=0;e<this.engine.vertices.length;e++){let i=this.engine.vertices[e].position.squareDist(this.engine.pointer);i<t&&(this.engine.dragVertex=this.engine.vertices[e],t=i)}}!1===this.engine.pointer.isDown&&(this.engine.dragVertex=null)},t.exports=r},function(t,e){t.exports={self:null,create:function(t){return this.self=t,this},dots:function(t,e){let i=2*Math.PI,s=t||4;for(let t=0,n=this.self.vertices.length;t<n;t++){let n=this.self.vertices[t].position;if(!n.hidden){let t=n.color||e||"black";this.self.ctx.beginPath(),this.self.ctx.fillStyle=t,this.self.ctx.arc(n.x,n.y,s,0,i),this.self.ctx.fill(),this.self.ctx.closePath()}}},pointIndex:function(t,e){this.self.ctx.font=t||"10px Arial",this.self.ctx.fillStyle=e||"black";for(let t=0;t<this.self.vertices.length;t++){let e=this.self.vertices[t].position;this.self.ctx.fillText(t,e.x-5,e.y-5)}this.self.ctx.fill()},lines:function(t,e,i){if(i||(i=!1),this.self.constraints.length>0){this.self.ctx.beginPath(),this.self.ctx.strokeStyle=e||"black",this.self.ctx.lineWidth=t||1;for(let t=0;t<this.self.constraints.length;t++){let e=this.self.constraints[t];e.hidden||(this.self.ctx.moveTo(e.p0.x,e.p0.y),this.self.ctx.lineTo(e.p1.x,e.p1.y)),!0===i&&e.hidden&&(this.self.ctx.moveTo(e.p0.x,e.p0.y),this.self.ctx.lineTo(e.p1.x,e.p1.y))}this.self.ctx.stroke(),this.self.ctx.closePath()}},indexOfBodies:function(t,e){this.self.ctx.save(),this.self.ctx.font=t||"10px Arial",this.self.ctx.fillStyle=e||"black";for(let t=0;t<this.self.bodies.length;t++){let e=this.self.bodies[t];for(let i=0;i<e.vertices.length;i++){let s=e.vertices[i].position;this.self.ctx.fillText(t+"."+i,s.x-10,s.y-10)}}this.self.ctx.fill(),this.self.ctx.restore()},centerOfMass:function(t){this.self.ctx.fillStyle=t||"black",this.self.ctx.beginPath();for(let t=0;t<this.self.bodies.length;t++){let e=this.self.bodies[t];this.self.ctx.fillRect(e.center.x-2.5,e.center.y-2.5,5,5)}this.self.ctx.fill(),this.self.ctx.closePath()},boundingBox:function(t){this.self.ctx.fillStyle=t||"rgba(0,0,0,0.2)",this.self.ctx.beginPath();for(let t=0;t<this.self.bodies.length;t++){let e=this.self.bodies[t];this.self.ctx.fillRect(e.center.x-e.halfEx.x,e.center.y-e.halfEx.y,e.halfEx.x+e.halfEx.x,e.halfEx.y+e.halfEx.y)}this.self.ctx.fill(),this.self.ctx.closePath()},information:function(){let t="Objects : "+this.self.bodies.length,e="Vertices : "+this.self.vertices.length,i="Constraints : "+this.self.constraints.length;this.self.ctx.fillStyle="black",this.self.ctx.font="14px Arial",this.self.ctx.fillText(t,10,20),this.self.ctx.fillText(e,10,40),this.self.ctx.fillText(i,10,60)}}},function(t,e,i){const s=i(5),n=i(4),o=i(3),r=i(2),h=i(1);function l(t,e,i,r,h,l){this.canvas=document.querySelector(t),this.width=e||200,this.height=i||200,this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.gravity=void 0===r?1:r,this.friction=void 0===h?.1:h,this.groundFriction=.1,this.simIteration=l||10,this.constraintIterations=1,this.collisionIteration=this.simIteration/2,this.bodies=[],this.vertices=[],this.constraints=[],this.collision=new o;const c=this;this.dragVertex=null,this.pointer={x:0,y:0,isDown:!1},this.canvas.addEventListener("mousedown",()=>c.pointer.isDown=!0),this.canvas.addEventListener("mouseup",()=>c.pointer.isDown=!1),this.canvas.addEventListener("mousemove",function(t){c.pointer.x=t.offsetX,c.pointer.y=t.offsetY}),this.Poly={box:function(t,e,i,s,o){var r=new n({mass:o.mass,angle:o.angle,static:o.static||!1,render:o.render,vertices:{n0:{x:t,y:e},n1:{x:t+i,y:e},n2:{x:t+i,y:e+s},n3:{x:t,y:e+s}},constraints:[["n0","n1",!0],["n1","n2",!0],["n2","n3",!0],["n3","n0",!0],["n0","n2"],["n3","n1"]]},c);return c.bodies.push(r),r},triangle:function(t,e,i,s,o){i/=2,s/=2;var r=new n({x:t,y:e,mass:o.mass,static:o.static||!1,render:o.render,vertices:{0:{x:t-i,y:e+s},1:{x:t,y:e-s},2:{x:t+i,y:e+s}},constraints:[[0,1,!0],[1,2,!0],[2,0,!0]]},c);return c.bodies.push(r),r},circle:function(t,e,i,s,o){let r={},h=[],l=0,a=0;for(let n=0;n<s;n++){l+=2*Math.PI/s;let o=Math.cos(l)*i,c=Math.sin(l)*i;r[n]={x:o+t,y:c+e},h.push([n,(n+(s-s/2+2))%s,!0]),h.push([n,(n+s-1)%s,!1]),a++}r[a]={x:t,y:e};for(let t=0;t<a;t++)h.push([t,a,!1]);var f=new n({x:t,y:e,mass:o.mass,static:o.static||!1,render:o.render,vertices:r,constraints:h},c);return c.bodies.push(f),f}},this.Render=s.create(this)}l.Body=n,l.Vertex=h,l.Constraint=r,l.prototype.addVertex=function(t,e,i){let s=new l.Vertex(this,{x:t,y:e},i,{friction:this.friction,gravity:this.gravity,canvas:this.canvas});this.vertices.push(s)},l.prototype.addConstraint=function(t,e,i){let s=new l.Constraint(this,this.vertices[t],this.vertices[e],i);this.constraints.push(s)},l.prototype.frame=function(t,e){this.clear(e),(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame)(t)},l.prototype.clear=function(t){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),t&&(this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height))},l.prototype.createPoly=function(t,e,i){void 0===i&&(i={});let s=new l.Body({mass:2===arguments.length?e.mass:i.mass,render:2===arguments.length?e.render:i.render,vertices:t,constraints:e||[]},this);if(2===arguments.length){for(let t=0;t<s.vertices.length;t++){let e=s.vertices,i=new l.Constraint(s,s.vertices[t],s.vertices[(t+1)%e.length],!0);s.edges.push(i),this.constraints.push(i),s.eCount++}s.calculateCenter();let t=new l.Vertex(s,s.center,!1,{friction:this.friction,gravity:this.gravity,canvas:this.canvas,groundFriction:this.groundFriction});s.vertices.push(t),s.positions.push(t.position),this.vertices.push(t),s.vCount++;for(let t=0;t<s.vertices.length-1;t++){let e=new l.Constraint(s,s.vertices[t],s.vertices[s.vertices.length-1],!1);s.edges.push(e),s.eCount++,this.constraints.push(e)}}return this.bodies.push(s),s},l.prototype.integrate=function(){for(let t=0;t<this.vertices.length;t++)this.vertices[t].integrate()},l.prototype.updateConstraints=function(){for(let t=0;t<this.constraints.length;t++)this.constraints[t].solve()},l.prototype.updateBoundary=function(){for(let t=0;t<this.vertices.length;t++)this.vertices[t].boundary()},l.prototype.updateCollision=function(){for(let t=0;t<this.bodies.length;t++)this.bodies[t].calculateCenter();for(let t=0;t<this.bodies.length-1;t++){let e=this.bodies[t];for(let i=t+1;i<this.bodies.length;i++){let t=this.bodies[i];this.collision.aabb(e,t)&&this.collision.SAT(e,t)&&this.collision.resolve(this.friction)}}},l.prototype.update=function(){this.integrate();for(let t=0;t<this.simIteration;t++){for(let t=0;t<this.constraintIterations;t++)this.updateBoundary(),this.updateConstraints();this.updateCollision()}},l.prototype.render=function(){for(let t=0;t<this.bodies.length;t++)this.bodies[t].draw(),this.bodies[t].drag()},l.prototype.drag=function(){if(this.dragVertex){this.ctx.beginPath(),this.ctx.moveTo(this.dragVertex.position.x,this.dragVertex.position.y),this.ctx.lineTo(this.pointer.x,this.pointer.y),this.ctx.strokeStyle="#000",this.ctx.stroke();var t=1*this.dragVertex.parent.mass;this.dragVertex.position.x+=(this.pointer.x-this.dragVertex.position.x)/t,this.dragVertex.position.y+=(this.pointer.y-this.dragVertex.position.y)/t}},l.prototype.fpsScope={fps:null,bar_vx:0,lastframe:null,fpsBars:[]},l.prototype.showFps=function(t){let e=void 0!==(t=t||{}).x?t.x:10,i=void 0!==t.y?t.y:10,s=void 0!==t.updateSpeed?t.updateSpeed:3,n=new Date;if(!this.fpsScope.lastframe)return this.fpsScope.lastframe=n.valueOf(),void(this.fpsScope.fps=0);let o=(n.valueOf()-this.fpsScope.lastframe)/1e3;n.valueOf(),this.fpsScope.lastframe;this.fpsScope.lastframe=n.valueOf(),this.fpsScope.bar_vx++,this.fpsScope.bar_vx>s&&(this.fpsScope.bar_vx=0),0===this.fpsScope.bar_vx&&(this.fpsScope.fps=(1/o).toFixed(1));let r=t.barsColor||"green";this.fpsScope.fps<40&&(r="orange"),this.fpsScope.fps<20&&(r="red"),this.fpsScope.fpsBars.push({x:e+this.fpsScope.bar_vx,y:this.fpsScope.fps/2,color:r}),this.fpsScope.fpsBars.length>87&&this.fpsScope.fpsBars.shift();let h=this.ctx;return function(){h.beginPath(),h.fillStyle=t.background||"white",h.strokeStyle="black",h.lineWidth=.5,h.fillRect(e-5,i-5,100,60),h.strokeRect(e-5,i-5,100,60),h.fill(),h.stroke(),h.fillStyle=t.fontColor||"#555",h.font=t.font||"10px Arial",h.fillText("FPS : "+this.fpsScope.fps,e,i+10),h.save(),h.scale(1,-1);for(let t=0;t<this.fpsScope.fpsBars.length;t++)h.fillStyle=this.fpsScope.fpsBars[t].color,this.fpsScope.fpsBars[t].x+=1,h.fillRect(this.fpsScope.fpsBars[t].x-2,-50-i,1.2,this.fpsScope.fpsBars[t].y);h.restore(),h.strokeStyle="crimson",h.moveTo(e,i+20),h.lineTo(e+90,i+20),h.lineWidth=1,h.stroke(),h.closePath()}.call(this,null),this.fpsScope.fps},t.exports=l},function(t,e,i){t.exports=i(6)}])});
//# sourceMappingURL=atomic.build.js.map