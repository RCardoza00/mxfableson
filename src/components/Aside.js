import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu ,SidebarHeader,SidebarContent } from 'react-pro-sidebar';
import  {Link}  from 'react-router-dom';
import '../css/SideMenu.css';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar, onChange }) => {
	const handleChange = e => { onChange(e); }
	return (
		<ProSidebar
			image={false}
			rtl={false}
			collapsed={false}
			toggled={false}
			breakPoint="md"
			>
			<SidebarHeader>
				<div
					style={{
						paddingLeft: '24px',
						textTransform: 'uppercase',
						fontWeight: 'bold',
						fontSize: 14,
						letterSpacing: '1px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						textAlign: 'center',
					}}
					>
					Menu
				</div>
			</SidebarHeader>
			<SidebarContent>
				<Menu iconShape="circle">
					<SubMenu title="Dashboard" >
						<MenuItem onClick={ () => handleChange("Global Target Summary") }>Global Target Summary</MenuItem>
						<SubMenu icon title="Net Forest Cover Change">
							<MenuItem onClick={ () => handleChange("Net Forest Cover Change 1") }>Net Forest Cover Change </MenuItem>
							<MenuItem onClick={ () => handleChange("Net Forest Cover Change 2") }>Net Forest Cover Change by country</MenuItem>
						</SubMenu>
						<MenuItem onClick={ () => handleChange("Biodiversity") }>Biodiversity</MenuItem>
						<MenuItem onClick={ () => handleChange("Protected Areas by Type") }>Protected Areas by Type</MenuItem>
						<MenuItem onClick={ () => handleChange("Land Cover") }>Land Cover</MenuItem>
						<SubMenu title="Fresh Water">
							<MenuItem  onClick={ () => handleChange("Fresh Water 1") }>Fresh Water </MenuItem>
							<MenuItem  onClick={ () => handleChange("Fresh Water 2") }>Fresh Water by country</MenuItem>
						</SubMenu>
						<SubMenu title="Green House Gas (GHG) Emissions">
							<MenuItem  onClick={ () => handleChange("Green House Gas (GHG) Emissions 1") }>Green House Gas (GHG) Emissions </MenuItem>
							<MenuItem  onClick={ () => handleChange("Green House Gas (GHG) Emissions 2") }>Green House Gas (GHG) Emissions by country</MenuItem>
						</SubMenu>
						<SubMenu title="Food Energy Intake Per Capita">
							<MenuItem onClick={ () => handleChange("Food Energy Intake Per Capita 1") }>Food Energy Intake Per Capita 1</MenuItem>
							<MenuItem onClick={ () => handleChange("Food Energy Intake Per Capita 2") }>Food Energy Intake Per Capita 2</MenuItem>
						</SubMenu>
					</SubMenu>
					<MenuItem onClick={ () => handleChange("Trade_Report") }>Trade Report</MenuItem>
				
                   <MenuItem>
				  
				   <a href="http://testing.claudiester.tk:3000/"></a>
				   Biodiversity
				   </MenuItem>
                
				</Menu>
			</SidebarContent>
		</ProSidebar>
	);
};
export default Aside;