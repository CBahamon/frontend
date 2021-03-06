import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from "react-router-dom";

const navigation = [
	{ name: 'Inicio', to: '/' },
	{ name: 'Registros', to: '/list-all' },

]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}
export const Navbar = () => {

	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				// web Menu
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex-shrink-0 flex items-center">
									<img
										className="hidden lg:block h-8 w-auto bg-white"
										src="https://img.icons8.com/ios/100/000000/parking.png"
										alt="Workflow"
									/>
								</div>

								{/* items de navigacion */}
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<NavLink
												key={item.name}
												to={item.to}
												className={classNames(
													item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
													'px-3 py-2 rounded-md text-sm font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</NavLink>
										))}
									</div>
								</div>
							</div>

						</div>
					</div>

					{/* // Mobile menu */}

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									className="flex"
								>
									<NavLink
										key={item.name}
										to={item.to}
										className={classNames(
											item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'px-3 py-2 rounded-md text-sm font-medium'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</NavLink>
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}