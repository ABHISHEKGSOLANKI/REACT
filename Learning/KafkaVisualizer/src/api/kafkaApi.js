import axios from "axios";

const BASE_URL = "http://localhost:8080/kafka/v1";

export const fetchTopics = () => axios.get(`${BASE_URL}/topics`);

export const fetchTopicDetails = (topic) =>
  axios.get(`${BASE_URL}/topics/${topic}`);

export const fetchConsumerGroups = () =>
  axios.get(`${BASE_URL}/consumers`);

export const searchMessages = (topic, query) =>
  axios.post(`${BASE_URL}/search`, { topic, query });
