import { getUsersForSidebar } from "@/lib/data";
import Chat from "./chat";
import { auth } from "@/auth";

const Chats = async () => {
	const session = await auth();
	const chats = session?.user ? await getUsersForSidebar(session.user._id) : [];
	return (
		<nav className='flex-1 overflow-y-auto'>
			<ul>
				{chats.map((chat) => (
					<Chat key={chat._id as any} chat={chat} />
				))}
			</ul>
		</nav>
	);
};
export default Chats;
