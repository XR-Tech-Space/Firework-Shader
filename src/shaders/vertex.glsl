void main()
{
    // Final position
    vec4 modelPositin = modelMatrix * vec4(position,1.0);
    vec4 viewPosition = viewMarix * modelPositin;
    gl_Position = projectionMatrix * viewPosition;

    // Final size
    gl_PointSize=20.0;
}