test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();

  const parseUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parseUpdateAt);

  expect(responseBody.database.data_base_version).toEqual("18.0");
  expect(responseBody.database.max_connect).toBe('100');
});
