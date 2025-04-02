import redis.clients.jedis.Jedis;
import java.util.List;

public class RedisHandler {
    private redis.clients.jedis.Jedis jedis;

    public RedisHandler(String host, int port) {
        this.jedis = new Jedis(host, port);
    }

    public void saveVote(String voteId, String voteData) {
        jedis.set(voteId, voteData);
    }

    public String getVote(String voteId) {
        return jedis.get(voteId);
    }

    public List<String> getAllVotes() {
        return jedis.lrange("votes", 0, -1);
    }

    public void close() {
        jedis.close();
    }
}