import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";

const MessageCard = ({ message }: { message: Message }) => {
  const created = new Date(message.created.seconds * 1000).toLocaleDateString(
    "hu-HU"
  );

  const handleSeen = (id: string) => {
    setDoc(doc(db, "messages", id), { ...message, seen: !message.seen });
  };

  const handleMarkRemove = (id: string) => {
    setDoc(doc(db, "messages", id), {
      ...message,
      removed: !message.removed,
    });
    toast.error(
      <Text as="div" className="flex items-center justify-between">
        <Text>
          Message with id{" "}
          <Text
            type="expandedBold"
            as="span"
            className="underline underline-offset-4"
          >
            {id}
          </Text>{" "}
          has been removed!
        </Text>{" "}
      </Text>,
      { autoClose: 10000 }
    );
  };

  const handleClipboard = async (email: string) => {
    await navigator.clipboard.writeText(email);
    toast.success(
      <Text>
        Email copied to clipboard:{" "}
        <Text as="span" type="expandedBold">
          {email}
        </Text>
      </Text>
    );
  };

  return (
    <div
      key={message.id}
      className={`${
        message.seen ? "bg-white" : "bg-primaryLight animate-shake"
      } p-4 border border-dark/20 transition-all hover:border-dark flex flex-col justify-between`}
    >
      <div className="flex justify-between items-center text-primaryDark">
        <Text
          title={message.name}
          type="expandedLight"
          className="truncate max-w-xs"
        >
          {message.name}
        </Text>
        <Text
          as="span"
          type="expandedLight"
          className="center gap-2 flex-nowrap"
        >
          <Icon name="calendar" />
          <span title={created}>{created}</span>
        </Text>
      </div>
      <div className="my-4">
        <Text type="expandedBold">{message.subject}</Text>

        <Text type="expandedLight" className="text-sm">
          {message.message}
        </Text>
      </div>
      <div className="flex justify-between items-center">
        <Text as="div" type="expandedLight" className="truncate max-w-xs">
          <p
            title={message.email}
            className="truncate max-w-xs underline underline-offset-4 transition-all hover:cursor-pointer hover:underline-offset-[6px]"
            onClick={() => handleClipboard(message.email)}
          >
            {message.email}
          </p>
        </Text>
        <div className="center flex-nowrap gap-2 text-white">
          {message.seen && (
            <button
              className="bg-red-600 px-2 py-1 rounded-full aspect-square transition-opacity hover:opacity-80"
              onClick={() => handleMarkRemove(message.id!)}
            >
              <Icon size={20} name="circleClose" />
            </button>
          )}
          <button
            className="bg-green-600 px-2 py-1 rounded-full aspect-square transition-opacity hover:opacity-80"
            onClick={() => handleSeen(message.id!)}
          >
            <Icon size={20} name="circleCheck" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
