// eslint-disable-next-line no-unused-vars
import { Drawer, Layout } from 'antd'
import React, { useState } from 'react'

const StudentLayout = ({ children }) => {

  const [drawer, setDrawer] = useState(false)

  return (
    <Layout>
      {children}

      <Drawer
        title={'Student'}
        placement="left"
        width={220}
        onClose={() => setDrawer(false)}
        visible={drawer}
        className="p-0"
        bodyStyle={{ padding: 0 }}
      >
        <div>
          {/* <AdminSidePanelMenu /> */}
        </div>
      </Drawer>
    </Layout>
  )
}

export default StudentLayout