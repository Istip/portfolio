"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/utils/firebase";
import PageContainer from "@/components/Container/Container";
import Text from "@/components/Text/Text";
import MessageCard from "./MessageCard";

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onSnapshot(
      query(
        collection(db, "messages"),
        orderBy("created", "desc"),
        where("removed", "==", false)
      ),
      (snapshot) => {
        const data: Message[] = [];

        snapshot.forEach((doc) => {
          data.push({ ...(doc.data() as Message), id: doc.id });
        });

        setMessages(data);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const inbox = messages && messages.length !== 0;

  return (
    <PageContainer>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100%" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Text
              type="expandedBlack"
              className="text-center text-3xl text-primary py-2"
            >
              Loading
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
      <Text
        type="expandedBlack"
        className="text-3xl sm:text-5xl text-center text-dark"
      >
        Dashboard
      </Text>
      <div className="md:px-[50px] px-5 py-9">
        {inbox && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {messages.map((message) => (
              <MessageCard key={message.id} message={message} />
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Messages;
