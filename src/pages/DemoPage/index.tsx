import DemoComponent from "@/components/DemoComponent"
import FeatureComponent from "@/features/demo/components/FeatureComponent"
import DemoLayout from "@/layouts/DemoLayout"

const DemoPage = () => {
  return <div>
    <DemoLayout>
      <DemoComponent />
      <FeatureComponent />
    </DemoLayout>
  </div>
}

export default DemoPage