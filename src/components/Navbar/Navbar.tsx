import React from "react";
import { Button, Row, Col, Input, Space, Dropdown } from "antd";
import { BellOutlined, CaretDownOutlined, DownOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined, VerticalLeftOutlined } from "@ant-design/icons";
import { MenuProps } from "rc-menu";
import { RxEnter } from "react-icons/rx";

const { Search } = Input;

export default function Navbar() {

	return (
		<nav className="py-4">
			<div className="flex flex-row items-center justify-between">
				<div className="w-[50%] flex flex-row items-center gap-32 max-[600px]:w-full max-[600px]:w-full max-[600px]:justify-start">
					<Space className="max-[600px]:w-[50% max-[600px]:justify-between] max-[600px]:w-full max-[600px]:w-[50%] max-[600px]:justify-between">
						<Button className="bg-transparent border-none text-gray-100 hover:bg-blue-600" icon={<MenuOutlined className="text-gray-100" />}></Button>
						<a href="#" className="text-gray-100 decoration-transparent text-xl max-[600px]:text-center">Logo</a>
					</Space>
					<Space className="max-[600px]:hidden" style={{ gap: "22px" }}>
						<a href="#" className="text-slate-100 font-extralight">How it works</a>
						<a href="#" className="text-slate-100 font-extralight">Works with us</a>
					</Space>
				</div>
				<div className="w-[50%] flex flex-row items-center justify-end gap-3 max-[600px]:hidden">
					<Button className="bg-transparent border-none text-gray-100 hover:bg-blue-600 max-[600px]:hidden" icon={<SearchOutlined className="text-gray-100" />}></Button>
					<Button className="flex flex-row items-center bg-blue-600 rounded-sm border-none text-gray-100 hover:bg-blue-600 max-[600px]:hidden">Login &nbsp;<RxEnter className="text-gray-100" /></Button>
				</div>
			</div>
		</nav>
	)
};

const items: MenuProps["items"] = [
	{
		key: "1",
		label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
				1st menu item
			</a>
		),
	},
	{
		key: "2",
		label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
				2nd menu item
			</a>
		),
	},
	{
		key: "3",
		label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
				3rd menu item
			</a>
		),
	},
];

const ComponentDropdown = (items: MenuProps["items"], label: string) => (
	<Dropdown menu={{ items }} trigger={["click"]}>
		<a onClick={e => e.preventDefault()} href="">
			<Space size={3}>
				{label}
				<CaretDownOutlined />
			</Space>
		</a>
	</Dropdown>
);