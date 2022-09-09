export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatQuestion(question, questionAuthor, authedUser) {
  const { id, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = questionAuthor;

  return {
    id,
    name,
    avatar: avatarURL,
    timestamp,
    optionOneText: optionOne.text,
    optionOneVotes: optionOne.votes,
    optionOneVotesTotal: optionOne.votes.length,
    optionTwoText: optionTwo.text,
    optionTwoVotes: optionTwo.votes,
    optionTwoVotesTotal: optionTwo.votes.length,
    isAnswered:
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser)
        ? true
        : false,
  };
}
