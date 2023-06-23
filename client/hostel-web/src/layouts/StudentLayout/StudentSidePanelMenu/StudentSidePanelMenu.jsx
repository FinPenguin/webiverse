import React from 'react'
import { useNavigate, useLocation } from 'react-router'
import { Menu } from 'antd'
import {
  IdcardTwoTone,
  DashboardTwoTone,
  ShopTwoTone
} from '@ant-design/icons'
import { STUDENT_NAV } from '../../../navigations/navigation.consts/student.nav.const'

// import { permissionChecker } from '../../utility/Utils'

const { SubMenu } = Menu

const StudentSidePanelMenu = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const findSelected = (open = false) => {
    const selectedMenues = []
    const openMenues = []

    STUDENT_NAV.map(i => {
      if (!i.children) {
        if (i.route === location.pathname) {
          selectedMenues.push(i.route)
        }
      }
    })
    return open ? openMenues : selectedMenues
  }

  const childrenPermissionsChecker = (menus) => {
    let anyPermision = false

    menus.map(i => {
      anyPermision = true
    })

    return anyPermision
  }

  return (
    <Menu className='admin-side-bar-menu' theme="light" defaultOpenKeys={() => findSelected(true)} defaultSelectedKeys={() => findSelected()} mode="inline">
      {STUDENT_NAV.map((i, index) => (
        <React.Fragment key={String(index)}>
          {!i.children && (
            <>
              <Menu.Item onClick={() => navigate(i.route)} key={i.route} icon={i.icon}>
                {i.title}
              </Menu.Item>
            </>
          )}
          {i.children && (
            <>
              {childrenPermissionsChecker(i.children) && (
                <SubMenu key={i.title} icon={i?.icon} title={i.title}>
                  {i.children.map((j, idx) => (
                    <React.Fragment key={String(index) + String(idx)}>
                      <Menu.Item onClick={() => navigate(j.route)} key={j.route}>
                        {j.title}
                      </Menu.Item>
                    </React.Fragment>
                  ))}
                </SubMenu>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </Menu>
  )
}

export default StudentSidePanelMenu