interface IDemoLayout {
  children?: any
}

const DemoLayout = (props: IDemoLayout) => {
  const {children} = props

  return (
    <div>
      <h1>This is Demo Layout Toolbar.</h1>
      {children}
    </div>
  )
}

export default DemoLayout
