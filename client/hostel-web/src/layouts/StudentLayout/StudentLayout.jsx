// eslint-disable-next-line no-unused-vars
import { Drawer, Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import StudentSidePanelMenu from './StudentSidePanelMenu/StudentSidePanelMenu'

const StudentLayout = ({ children }) => {

  const [drawer, setDrawer] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sider
        style={{
          overflowY: 'auto',
          // position: 'fixed',
          zIndex: 1,
        }}
        collapsible
        className="shadow-lg hidden md:block" theme="light" id="components-layout-demo-side"
      >

        {/* <div className="p-4">
          {collapsed && (
            <img src={AdminLogoSmall} className="img-fluid" />
          )}
          {!collapsed && (
            <img src={AdminLogoLarge} className="img-fluid" />
          )}
        </div> */}

        <StudentSidePanelMenu />

      </Sider>

      <Content className={`mx-2 md:mx-4 md:mt-2`}>

        <div className="p-2 overflow-auto mt-14">
          {children}
        </div>

      </Content>

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