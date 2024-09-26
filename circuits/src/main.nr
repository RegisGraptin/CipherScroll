
fn main(message : pub str<32>) {
    let expected_message = "aGVsbG9fd29ybGRfY3RmX3Bhc3N3b3Jk";
    assert(message == expected_message);
}

#[test]
fn test_main() {
    main("aGVsbG9fd29ybGRfY3RmX3Bhc3N3b3Jk");

    // Uncomment to make test fail
    // main(1, 1);
}
