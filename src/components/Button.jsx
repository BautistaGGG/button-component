/* eslint-disable react/prop-types */
function Button({bgColor,textColor,text,height,width, border,radius}) {
  return (
    <button style={{
      backgroundColor: bgColor,
      color: textColor,
      borderRadius: radius,
      border: border,
      height: height,
      width: width
    }}>
      {text}
    </button>
  )
}

export default Button