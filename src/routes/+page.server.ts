import type { PageServerLoad } from "./$types";
import { Role } from "./enums";

export const load = (async ({ fetch }) => {
  const getUsername = async (uuid: string): Promise<string> => {
    const res = await fetch(`/api/uuid/${uuid}`);
    const { username } = await res.json();
    return username;
  };

  const contributors = async () => {
    const ids = [
      { id: "dec987bbfa734d63bb9d566139232f81", quote: "btw i use arch", role: Role.MAINTAINER },
      { id: "91f57dfc7f5845c9a4920f6c16640038", quote: "A useless human being that delivers nothing to society", role: Role.MAINTAINER },
      { id: "b44d2d5272dc49c28185b2d6a158d80a", quote: "nyaaaa~ :3", role: Role.MAINTAINER },
      { id: "f5667ad6b4b3434ba58f2ed2396f62f2", quote: '"lazy dev" &nbsp (ﾉ´･ω･)ﾉ ﾐ ┸━┸', role: Role.MAINTAINER },
      { id: "20d6334b7f9541ebbf7f860205ebf846", quote: "bob", role: Role.MAINTAINER },
      { id: "aad581b2f90048a785a7573d31d7b862", quote: "ember armor no longer on top :((", role: Role.MAINTAINER },
      { id: "d705483c5157460dad39712e4d74dfe1", quote: "Last online: January 1st, 1970", role: Role.FACILITATOR },
      { id: "7d7b04b49c24433cacc60a3da66eba01", quote: "🍞Grandmaster of Unit Testing", role: Role.FACILITATOR },
      { id: "1915444928b64d8b8973df8044f8cdb7", quote: "lea plant", role: Role.CONTRIBUTOR },
      { id: "8a3fa60d87aa4240bcdc624b90632529", quote: "Nate: CSS Wizard", role: Role.CONTRIBUTOR },
      { id: "5435b597612f4554a3c651fd1c3ee96a", quote: "/visit dukioooo", role: Role.CONTRIBUTOR }
    ];

    const usernames = await Promise.all(ids.map(({ id }) => getUsername(id)));

    return ids.map((contributor, index) => ({
      ...contributor,
      name: usernames[index]
    }));
  };

  return {
    contributors: contributors()
  };
}) satisfies PageServerLoad;
