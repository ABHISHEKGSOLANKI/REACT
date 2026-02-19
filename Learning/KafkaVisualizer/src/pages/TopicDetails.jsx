import useKafkaStream from "../hooks/useKafkaStream";
import MessageTable from "../components/MessageTable";
import { useParams } from "react-router-dom";

export default function TopicDetails() {
  const { topic } = useParams();
  const messages = useKafkaStream(topic);

  return (
    <div>
      <h2>Topic: {topic}</h2>
      <MessageTable messages={messages} />
    </div>
  );
}
