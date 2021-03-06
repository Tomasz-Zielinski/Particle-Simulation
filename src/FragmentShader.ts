const FragmentShader: string = `

    float scaleLinear( float value, vec2 valueDomain, vec2 valueRange ) {

    	return mix( valueRange.x, valueRange.y, ( value - valueDomain.x ) / ( valueDomain.y - valueDomain.x ) );

    }

    varying vec4 vColor;
    varying float lifeLeft;

    uniform sampler2D tSprite;

    void main() {

    	float alpha = 0.0;

    	if( lifeLeft > 0.995 ) {

    		alpha = scaleLinear( lifeLeft, vec2( 1.0, 0.995 ), vec2( 0.0, 1.0 ) );

    	} else alpha = lifeLeft * 0.75;

    	vec4 tex = texture2D( tSprite, gl_PointCoord );
    	gl_FragColor = vec4( vColor.rgb * tex.a, 1.0 );

    }

`

export { FragmentShader }