uniform float uOpacity;
uniform vec2 uResolution;
uniform vec3 uBackgroundColor;

varying vec2 vUv;

void main() {
  vec2 grid = abs(fract(vUv * vec2(uResolution.x / uResolution.y, 1.0) * 150.0) - 0.5);

  float line = min(grid.x, grid.y);
  float color = 1.0 - smoothstep(0.0, 0.02, line);

  vec3 finalColor = uBackgroundColor;

  finalColor = mix(finalColor, vec3(1.0), color * uOpacity);

  gl_FragColor = vec4(finalColor, 1.0);
}