/* eslint-disable */
import type { Prisma, UserClassProgress } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateUserClassProgress(options?: Omit<(UseMutationOptions<(UserClassProgress | undefined), DefaultError, Prisma.UserClassProgressCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserClassProgressCreateArgs, DefaultError, UserClassProgress, true>('UserClassProgress', 'POST', `${endpoint}/userClassProgress/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserClassProgressCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserClassProgressCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserClassProgress, Prisma.UserClassProgressGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserClassProgressCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserClassProgress, Prisma.UserClassProgressGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyUserClassProgress(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserClassProgressCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserClassProgressCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('UserClassProgress', 'POST', `${endpoint}/userClassProgress/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserClassProgressCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserClassProgressCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserClassProgressCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyUserClassProgress<TArgs extends Prisma.UserClassProgressFindManyArgs, TQueryFnData = Array<Prisma.UserClassProgressGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/findMany`, args, options, fetch);
}

export function useInfiniteFindManyUserClassProgress<TArgs extends Prisma.UserClassProgressFindManyArgs, TQueryFnData = Array<Prisma.UserClassProgressGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/findMany`, args, options, fetch);
}

export function useSuspenseFindManyUserClassProgress<TArgs extends Prisma.UserClassProgressFindManyArgs, TQueryFnData = Array<Prisma.UserClassProgressGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyUserClassProgress<TArgs extends Prisma.UserClassProgressFindManyArgs, TQueryFnData = Array<Prisma.UserClassProgressGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/findMany`, args, options, fetch);
}

export function useFindUniqueUserClassProgress<TArgs extends Prisma.UserClassProgressFindUniqueArgs, TQueryFnData = Prisma.UserClassProgressGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueUserClassProgress<TArgs extends Prisma.UserClassProgressFindUniqueArgs, TQueryFnData = Prisma.UserClassProgressGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/findUnique`, args, options, fetch);
}

export function useFindFirstUserClassProgress<TArgs extends Prisma.UserClassProgressFindFirstArgs, TQueryFnData = Prisma.UserClassProgressGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstUserClassProgress<TArgs extends Prisma.UserClassProgressFindFirstArgs, TQueryFnData = Prisma.UserClassProgressGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/findFirst`, args, options, fetch);
}

export function useUpdateUserClassProgress(options?: Omit<(UseMutationOptions<(UserClassProgress | undefined), DefaultError, Prisma.UserClassProgressUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserClassProgressUpdateArgs, DefaultError, UserClassProgress, true>('UserClassProgress', 'PUT', `${endpoint}/userClassProgress/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserClassProgressUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserClassProgressUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserClassProgress, Prisma.UserClassProgressGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserClassProgressUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserClassProgress, Prisma.UserClassProgressGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyUserClassProgress(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserClassProgressUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserClassProgressUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('UserClassProgress', 'PUT', `${endpoint}/userClassProgress/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserClassProgressUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserClassProgressUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserClassProgressUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertUserClassProgress(options?: Omit<(UseMutationOptions<(UserClassProgress | undefined), DefaultError, Prisma.UserClassProgressUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserClassProgressUpsertArgs, DefaultError, UserClassProgress, true>('UserClassProgress', 'POST', `${endpoint}/userClassProgress/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserClassProgressUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserClassProgressUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserClassProgress, Prisma.UserClassProgressGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserClassProgressUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserClassProgress, Prisma.UserClassProgressGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteUserClassProgress(options?: Omit<(UseMutationOptions<(UserClassProgress | undefined), DefaultError, Prisma.UserClassProgressDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserClassProgressDeleteArgs, DefaultError, UserClassProgress, true>('UserClassProgress', 'DELETE', `${endpoint}/userClassProgress/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserClassProgressDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserClassProgressDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, UserClassProgress, Prisma.UserClassProgressGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.UserClassProgressDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, UserClassProgress, Prisma.UserClassProgressGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyUserClassProgress(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.UserClassProgressDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.UserClassProgressDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('UserClassProgress', 'DELETE', `${endpoint}/userClassProgress/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.UserClassProgressDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserClassProgressDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.UserClassProgressDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateUserClassProgress<TArgs extends Prisma.UserClassProgressAggregateArgs, TQueryFnData = Prisma.GetUserClassProgressAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateUserClassProgress<TArgs extends Prisma.UserClassProgressAggregateArgs, TQueryFnData = Prisma.GetUserClassProgressAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/aggregate`, args, options, fetch);
}

export function useGroupByUserClassProgress<TArgs extends Prisma.UserClassProgressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserClassProgressGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserClassProgressGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.UserClassProgressGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.UserClassProgressGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.UserClassProgressGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.UserClassProgressGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.UserClassProgressGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByUserClassProgress<TArgs extends Prisma.UserClassProgressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.UserClassProgressGroupByArgs['orderBy'] } : { orderBy?: Prisma.UserClassProgressGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.UserClassProgressGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.UserClassProgressGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.UserClassProgressGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.UserClassProgressGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.UserClassProgressGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/groupBy`, args, options, fetch);
}

export function useCountUserClassProgress<TArgs extends Prisma.UserClassProgressCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.UserClassProgressCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/count`, args, options, fetch);
}

export function useSuspenseCountUserClassProgress<TArgs extends Prisma.UserClassProgressCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.UserClassProgressCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.UserClassProgressCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('UserClassProgress', `${endpoint}/userClassProgress/count`, args, options, fetch);
}

export function useCheckUserClassProgress<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: number; userId?: string; classId?: string; watched?: boolean }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('UserClassProgress', `${endpoint}/userClassProgress/check`, args, options, fetch);
}
