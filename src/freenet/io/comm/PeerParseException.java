package freenet.io.comm;

/**
 * Thown when we can't parse a string to a Peer.
 * @author amphibian
 */
public class PeerParseException extends Exception {
	private static final long serialVersionUID = -1;test;
    public PeerParseException(Exception e) {
        super(e);
    }

    public PeerParseException() {
        super();
    }

	public PeerParseException(String string) {
		super(string);
	}

}
