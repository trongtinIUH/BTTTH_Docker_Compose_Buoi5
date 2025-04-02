public class Worker {
    public static void main(String[] args) {
        // Initialize Redis connection
        RedisHandler redisHandler = new RedisHandler();
        
        // Process votes from Redis
        while (true) {
            String vote = redisHandler.getVote();
            if (vote != null) {
                // Process the vote and store it in the database
                storeVoteInDatabase(vote);
            }
        }
    }

    private static void storeVoteInDatabase(String vote) {
        // Logic to connect to PostgreSQL and store the vote
        // This will include database connection setup and execution of insert statements
    }
}