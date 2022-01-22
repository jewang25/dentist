import React from "react";
import * as RiIcons from "react-icons/ri";
import { useTranslation } from 'react-i18next';


export const SidebarData = [
	{
		title: "Welcome",
		path: "/",
	},
	{
		title: "Meet Dr.Wong"
		,
		path: "/meet",

	},
	{
		title: "Office Information",

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Our Services",
				path: "/officeinfo/services",

			},
			{
				title: "Office Hours",
				path: "/officeinfo/hours",

			},
			{
				title: "Sterilization",
				path: "/officeinfo/sterilization",

			},
			{
				title: "Financial Policy",
				path: "/officeinfo/financialpolicy",

			},
			{
				title: "Appointment",
				path: "/officeinfo/appointment",

			},
			{
				title: "Forms",
				path: "/officeinfo/forms",

			},
		],
	},
	{
		title: "Contact",
		path: "/contact",

	},
	{
		title: "Dental Information",

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Patient Education",
				path: "/dentalInfo/education",

			},
			{
				title: "Dental Health Guides",
				path: "/dentalInfo/guides",
			},
			{
				title: "Tooth Whitening - Opalescence",
				path: "/dentalInfo/opalescence",

			},
			{
				title: "Tooth Whitening -  Zoom",
				path: "/dentalInfo/zoom",

			},
			{
				title: "Lumineers",
				path: "/dentalInfo/lumineers",

			},
			{
				title: "Invisalign",
				path: "/dentalInfo/invisalign",

			}
		],
	},

	{
		title: "Photo Gallery",
		path: "/photos",

	},
	{
		title: "Brushing Technique Video",
		path: "/video",

	}

]
